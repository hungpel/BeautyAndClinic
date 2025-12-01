import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: "https://beauty-and-clinic-opal.vercel.app"
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});