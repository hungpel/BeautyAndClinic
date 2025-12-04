import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://beauty-and-clinic-opal.vercel.app"],
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});