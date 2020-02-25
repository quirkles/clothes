import Sequelize from 'sequelize';

let sequelize;

export default (connectionString) => {
  if (sequelize) {
    return sequelize;
  }
  sequelize = new Sequelize(connectionString);
  return sequelize;
};
