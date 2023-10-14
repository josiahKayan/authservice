import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './migrations/connect';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import swaggerDocs from './swagger.json';

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs)
  );
  app.use(routes);



app.listen(3001,() => console.log('Server is running at http://localhost:3001'));