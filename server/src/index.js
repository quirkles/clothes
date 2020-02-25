import getDatabaseConnection from './getDatabaseConnection';

import { DB_CONNECTION_STRING } from './secrets';


getDatabaseConnection(DB_CONNECTION_STRING)
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })

  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
