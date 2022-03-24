module.exports = {
  HOST: "172.17.0.2",
  USER: "root",
  PASSWORD: "database123456",
  DB: "tshirt_test",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  STORENAME: "dev store",
};
