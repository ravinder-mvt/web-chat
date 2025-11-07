import Team from "../models/Team.model.js";
import User from "../models/User.model.js"; 


export const createTeam = async (req, res) => {
  try {
    const { name, description, ownerId } = req.body;

    if (!name || !ownerId) {
      return res
        .status(400)
        .json({ success: false, message: "Name and ownerId are requiressssd" });
    }

    const team = await Team.create({
      name,
      description,
      ownerId,
      members: [ownerId],
    });

    res.status(201).json({
      success: true,
      message: "Team created successfully",
      team,
    });
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getTeamsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId)
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });

    const teams = await Team.find({
      $or: [{ ownerId: userId }, { members: userId }],
    }).populate("members", "name email");

    res.status(200).json({
      success: true,
      teams,
    });
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export const addMemberToTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const { userId } = req.body;

    if (!teamId || !userId) {
      return res
        .status(400)
        .json({ success: false, message: "Team ID and User ID are required" });
    }

    const team = await Team.findById(teamId);
    if (!team)
      return res.status(404).json({ success: false, message: "Team not found" });


    if (!team.members.includes(userId)) {
      team.members.push(userId);
      await team.save();
    }

    res.status(200).json({
      success: true,
      message: "Member added successfully",
      team,
    });
  } catch (error) {
    console.error("Error adding member:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
