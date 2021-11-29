const ConnectList = async () => {
  const mysql = require("mysql2/promise");

  // create the connection to database
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "admin",
    database: "db_sygnalista",
    password: "admin",
  });

  return connection;
};
module.exports = ConnectList;
