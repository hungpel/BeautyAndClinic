import bcrypt from "bcrypt";
import { pool } from "../config/db.js";
import { createToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  if (user.length > 0) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed]
  );

  return res.json({ message: "Register success" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  if (user.length === 0) {
    return res.status(400).json({ message: "User not found" });
  }

  const valid = await bcrypt.compare(password, user[0].password);
  if (!valid) {
    return res.status(400).json({ message: "Wrong password" });
  }

  const token = createToken({ id: user[0].id, email: user[0].email });

  return res.json({
    message: "Login success",
    token,
    user: { id: user[0].id, name: user[0].name, email: user[0].email }
  });
};

export const getProfile = async (req, res) => {
  const [user] = await pool.query("SELECT id, name, email, avatar FROM users WHERE id = ?", [
    req.user.id,
  ]);

  return res.json(user[0]);
};
