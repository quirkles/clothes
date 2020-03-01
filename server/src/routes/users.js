import passport from 'passport';

import {
  createUser,
  attemptLogin,
} from '../controllers';

export default (app) => {
  app.post('/user', createUser);
  app.post('/login', attemptLogin);
  app.get(
    '/user',
    passport.authenticate('jwt', { session: false }),
    (req, res) => res.send(req.user),
  );
};
