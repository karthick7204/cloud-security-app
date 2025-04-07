const express = require("express");
const Threat = require("../models/Threat");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { ip } = req.body;
    const threat = new Threat({ ip });
    await threat.save();
    res.status(201).json({ message: "Threat logged" });
  } catch (err) {
   res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const threats = await Threat.find();
  res.json(threats);
});

module.exports = router;
