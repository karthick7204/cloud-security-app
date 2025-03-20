require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

app.get("/", (req, res) => res.send("Cloud Security App API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const threatRoutes = require("./routes/threatRoutes");

app.use("/api/threats", threatRoutes);
