import express from "express";
import "express-async-errors";
import cors from "cors";
import handleError from "./errors/handleError";
import {
  contactRouter,
  emailRouter,
  sessionRouter,
  userRouter,
} from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/session", sessionRouter);
app.use("/contacts", contactRouter);
app.use("/emails", emailRouter);

app.use(handleError);

export default app;
