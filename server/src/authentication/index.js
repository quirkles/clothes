import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import { user as userModel } from '../models';

import { JWT_SECRET } from '../secrets';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
  issuer: 'accounts.mysite.com',
  audience: 'mysite.net',
};

export const initPassport = () => {
  passport.use(new JwtStrategy(options, ((jwtPayload, done) => {
    userModel.findOne({
      where: { id: jwtPayload.id },
    })
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => {
        done(err, false);
      });
  })));
};
