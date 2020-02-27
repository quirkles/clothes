import Sequelize from 'sequelize';

const sequelizeInstances = {};

export default (connectionString) => {
  let sequelize = sequelizeInstances[connectionString];
  if (sequelize) {
    return sequelize;
  }
  sequelize = new Sequelize(connectionString, { omitNull: true });
  sequelizeInstances[connectionString] = sequelize;
  return sequelize;
};
