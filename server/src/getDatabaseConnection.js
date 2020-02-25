import Sequelize from 'sequelize';

const sequelizeInstances = {};

export default (connectionString) => {
  let sequelize = sequelizeInstances[connectionString];
  if (sequelize) {
    return sequelize;
  }
  console.log('!!!')
  sequelize = new Sequelize(connectionString);
  sequelizeInstances[connectionString] = sequelize;
  return sequelize;
};
