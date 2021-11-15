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

  // simple query

  // const dataa = connection.query(
  // 'SELECT * FROM wiadomosc, zgloszenie WHERE wiadomosc.id_zgloszenia = zgloszenie.id_zgloszenia;',
  // function(err, results, fields) {
  //      console.log(results); // results contains rows returned by server
  //     // console.log(fields); // fields contains extra meta data about results, if available
  // }
  // );

  // console.log(dataa.);
};
module.exports = ConnectList;
