import express from 'express';

import getDatabaseConnection from './getDatabaseConnection';

import initRoutes from './routes';
import { initPassport } from './authentication';

import { DB_CONNECTION_STRING } from './secrets';

initPassport();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

initRoutes(app);
initPassport();

getDatabaseConnection(DB_CONNECTION_STRING)
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })

  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port);
console.log(`Server litening on port ${port}`);
