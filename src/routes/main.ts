import express, { Request, Response } from "express";
import { Greeter } from "../services/main";

export const app = express();
const greeter = new Greeter();

app.get("/hello", (req: Request, res: Response) => {
  res.json({ message: greeter.sayHi() });
});

export default app;
