import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectedDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

connectedDB();

app.get("/", (req, res) => {
  res.send("API is running!!");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
