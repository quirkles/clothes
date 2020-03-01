import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import { JWT_SECRET } from '../secrets';

export const initPassport = (app) => {
  app.use(passport.initialize());
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET,
      },
      (jwtPayload, cb) => cb(null, jwtPayload),
    ),
  );
};
