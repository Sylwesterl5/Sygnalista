const adminCode = "BCO098231";
let admin = false;
const queryZgloszenias = async (connection, code, status = "*") => {
  console.log(status, code);
  code === adminCode ? (admin = true) : (admin = false);
  const stringQueery =
    code === adminCode
      ? // ? "SELECT * FROM wiadomosc, zgloszenie WHERE wiadomosc.id_zgloszenia = zgloszenie.id_zgloszenia and pierwszy=1 ;"
        // : "SELECT * FROM wiadomosc, zgloszenie WHERE wiadomosc.id_zgloszenia = zgloszenie.id_zgloszenia and pierwszy=1 and kod=? ;";

        `SELECT * FROM zgloszenie ${status === "*" ? "" : "WHERE status=?"} ;`
      : "SELECT * FROM zgloszenie WHERE zgloszenie.kod=?;";
  if (!code) {
    return { error: "missingCode" };
  }
  const [rows] = await connection.execute(stringQueery, [
    code === adminCode ? status : code,
  ]);
  if (rows.length === 0 && status !== "*") {
    return [];
  }
  if (rows.length === 0) {
    return { error: "wrongCode" };
  }
  const rowsEnd = {
    rows,
    admin,
  };

  return rowsEnd;
};
module.exports = queryZgloszenias;
