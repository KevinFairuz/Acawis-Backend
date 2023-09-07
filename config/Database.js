import { Sequelize } from 'sequelize';

const db = new Sequelize('db_acawis', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
