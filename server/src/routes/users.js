import passport from 'passport';

import {
  createUser,
  attemptLogin,
} from '../controllers';

export default (app) => {
  app.post('/users', createUser);
  app.post('/login', attemptLogin);
  app.get(
    '/users',
    passport.authenticate('jwt', { session: false }),
    (req, res) => res.send(req.user),
  );
};
