const Group = require("../models/group");

//Create New Group
async function create(req, res) {
  try {
    let newGroup = await Group.create({
      name: req.body.name,
      category: req.body.category,
      members: [req.user._id],
      textMsgs: [],
      fileMsgs: [],
      imgMsgs: [],
      polls: [],
      events: [],
    });
    res.status(200).json(newGroup);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//Join Existing Group
async function join(req, res) {
  try {
    // extracts group id from pasted link
    let groupId = req.body.link.split("/").slice(-1)[0];
    let group = await Group.findById(groupId);
    //check if not already in group
    let match = group.members.includes(req.user._id);
    if (!match) {
      group.members.push(req.user._id);
      await group.save();
      console.log("added to group");
    } else {
      console.log("already in group");
    }
    res.json(groupId);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//Fetch all Groups for user
async function index(req, res) {
  try {
    let groups = await Group.find({ members: req.user._id })
      .slice("textMsgs", -40)
      .populate("members");

    res.status(200).json(groups);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//Fetch one specific Group
async function getOne(req, res) {
  try {
    let group = await Group.findById(req.params.id);
    res.status(200).json(group);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  join,
  index,
  getOne,
};
