import { pick, propOr } from 'ramda';
import { sign } from 'jsonwebtoken';

import { user as userModel } from '../models';
import { encrypt } from '../encrypt';
import { JWT_SECRET } from '../secrets';

const userToToken = pick(['username', 'id']);

export const createUser = (req, res) => {
  const userData = req.body;
  userData.password = encrypt(userData.password);
  userModel.create(userData)
    .then((createdUser) => {
      const response = userToToken(createdUser.toJSON());
      const { username: user, id } = response;
      const token = sign({ user, sub: id }, JWT_SECRET);
      res.json({
        success: true,
        token,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send(err.errors);
    });
};


export const attemptLogin = (req, res) => {
  const userData = propOr({}, 'body', req);
  const { username, password = '' } = userData;
  const encryptedPassword = encrypt(password);
  userModel.findOne({
    where: {
      username,
      password: encryptedPassword,
    },
  })
    .then((foundUserModel) => {
      const { username: user, id } = userToToken(foundUserModel.toJSON());
      const token = sign({ user, sub: id }, JWT_SECRET);
      return res.json({ success: true, token });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send(err.errors);
    });
};
