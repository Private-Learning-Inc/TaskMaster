import express, { Request, Response } from "express";
import { Greeter } from "../services/main";

export const app = express();
const greeter = new Greeter();


/**
 * @openapi
 * /hello:
 *   get:
 *     summary: Returns a greeting message
 *     description: Returns a simple "Hello World!" greeting message
 *     responses:
 *       200:
 *         description: A successful response containing a greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello World!"
 */
app.get("/hello", (req: Request, res: Response) => {
  res.json({ message: greeter.sayHi() });
});



export default app;
