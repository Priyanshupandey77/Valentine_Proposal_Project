import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import Proposal from "../components/Proposal";
import SuccessScreen from "../components/SuccessScreen";
import Auth from "./Auth";

function Generate() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await API.get(`/${userId}`);
      setUser(data.user);
    };
    fetchUser();
  }, [userId]);

  const handleAccept = async () => {
    await API.put(`/accept/${userId}`);
    setShowSuccess(true);
  };

  if (!user) return <h2>Loading...</h2>;

  if (!isVerified) {
    return <Auth userId={userId} onSuccess={() => setIsVerified(true)} />;
  }

  return (
    <div>
      <Proposal name={user.name} onAccept={handleAccept} />
      <SuccessScreen show={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}

export default Generate;
