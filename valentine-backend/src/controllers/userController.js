import User from "../models/User.js";

//Proposal Generation

export const generateProposal = async (req, res) => {
  try {
    const { name, gender } = req.body;
    if (!name || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!["male", "female"].includes(gender)) {
      return res.status(400).json({ message: "Invalid gender value" });
    }

    const user = await User.create({ name, gender });

    res.status(201).json({
      success: true,
      user: {
        userId: user._id,
        name: user.name,
        gender: user.gender,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//fetch user
export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Accept proposal

export const acceptProposal = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(
      userId,
      { requestAccepted: true },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
