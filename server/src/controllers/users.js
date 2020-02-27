import { omit } from 'ramda';

import { user as userModel } from '../models';
import { encrypt, decrypt } from '../encrypt';

const omitPassword = omit(['password']);

export const createUser = (req, res) => {
  const userData = req.body;
  userData.password = encrypt(userData.password);
  userModel.create(userData)
    .then((user) => {
      const response = omitPassword(user.toJSON());
      res.json({
        success: true,
        user: response,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send(err.errors);
    });
};
