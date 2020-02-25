import {
  createUser,
} from '../controllers';

export default (app) => {
  app.post('/users', createUser);
};
