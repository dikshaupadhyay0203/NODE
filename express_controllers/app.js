import express from "express";
import userRouter from "./routes/user.routes.js";
import profileRouter from "./routes/profile.routes.js";

const app = express();

app.use("/users", userRouter);
app.use("/profile", profileRouter);

export default app;
