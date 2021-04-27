const express = require("express");
const router = express.Router();
const groupsCtrl = require("../../controllers/groups");

router.post("/create", groupsCtrl.create);
router.post("/join", groupsCtrl.join);
router.get("/:id", groupsCtrl.getOne);
router.get("/", groupsCtrl.index);

module.exports = router;
