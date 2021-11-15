// const queryAllWiadomosci = async (connection, args = []) => {
//   const [rows] = await connection.execute(
//     "SELECT * FROM wiadomosc, zgloszenie WHERE wiadomosc.id_zgloszenia = zgloszenie.id_zgloszenia and pierwszy=1 ;",
//     args
//   );
//   return rows;
// };
const adminCode = "1";

// SELECT * FROM zgloszenie ;

// SELECT * FROM zgloszenie WHERE zgloszenie.kod=? ;

const queryZgloszenias = async (connection, code) => {
  console.log(code);
  const stringQueery =
    code === adminCode
      ? // ? "SELECT * FROM wiadomosc, zgloszenie WHERE wiadomosc.id_zgloszenia = zgloszenie.id_zgloszenia and pierwszy=1 ;"
        // : "SELECT * FROM wiadomosc, zgloszenie WHERE wiadomosc.id_zgloszenia = zgloszenie.id_zgloszenia and pierwszy=1 and kod=? ;";

        "SELECT * FROM zgloszenie ;"
      : "SELECT * FROM zgloszenie WHERE zgloszenie.kod=? ;";

  if (!code) {
    return { error: "missingCode" };
  }
  const [rows] = await connection.execute(stringQueery, [code]);
  if (rows.length === 0) {
    return { error: "wrongCode" };
  }
  return rows;
};
module.exports = queryZgloszenias;
/// 2 tablice
// wiadomosci
