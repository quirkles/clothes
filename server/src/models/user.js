import { Model, STRING, UUID } from 'sequelize';

import { DB_CONNECTION_STRING } from '../secrets';

import getDbConnection from '../getDatabaseConnection';

const sequelize = getDbConnection(DB_CONNECTION_STRING);

class User extends Model {}
User.init({
  id: {
    type: UUID,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'user',
});

export default User;
