const { v4 } = require("uuid");

const getUniqueCode = async (connection) => {
  let codeProposal = v4().substring(0, 8);
  const query = "SELECT * FROM zgloszenie WHERE zgloszenie.kod=?;";
  const [rows] = await connection.execute(query, [codeProposal]);
  if (rows.length > 0) {
    return getUniqueCode(connection);
  } else {
    return codeProposal;
  }
};

const queryNewZgloszenie = async (
  connection,
  { title, description, status }
) => {
  const kod = (await getUniqueCode(connection)).toUpperCase();

  console.log(kod);
  //await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
  const stringQueery =
    "INSERT INTO zgloszenie (`id_zgloszenia`, `tytul`, `kod`, `wiadomosc`, `status`, `CzyOperator`) VALUES (NULL, ?, ?, ?, ?, '0');";
  await connection.execute(stringQueery, [title, kod, description, status]);
  console.log("afterexecut");
  return { kod };
};
module.exports = queryNewZgloszenie;
