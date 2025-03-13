import dotenv from "dotenv";
import app from "./routes/main";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Config } from "./config";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc(Config.swaggerOptions)),
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
