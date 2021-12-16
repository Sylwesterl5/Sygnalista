const ConnectList = async () => {
  const mysql = require("mysql2/promise");

  // create the connection to database
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "db_sygnalista",
    password: "",
  });

  return connection;
};
module.exports = ConnectList;
