import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

const API_PREFIX = "/api/v1";

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// ✅ Routes
app.use(`${API_PREFIX}/users`, userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
