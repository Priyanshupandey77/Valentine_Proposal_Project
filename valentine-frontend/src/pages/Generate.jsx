import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import Proposal from "../components/Proposal";

function Generate() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await API.get(`/${userId}`);
      setUser(data.user);
    };
    fetchUser();
  }, [userId]);

  const handleAccept = async () => {
    await API.put(`/accept/${userId}`);
    alert("She said YES ❤️");
  };

  if (!user) return <h2>Loading...</h2>;

  return <Proposal name={user.name} onAccept={handleAccept} />;
}

export default Generate;
