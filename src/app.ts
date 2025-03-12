import dotenv from "dotenv";
import app from "./routes/main";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
dotenv.config();

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express.js API',
      version: '1.0.0',
      description: 'A sample Express.js API built with TypeScript and Swagger',
    },
  },
  apis: ['./src/routes/*.ts'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
