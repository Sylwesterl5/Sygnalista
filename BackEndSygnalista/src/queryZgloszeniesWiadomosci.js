
const queryZgloszeniesWiadomosci = async (connection, idZgloszenia) => {
  console.log("asd", idZgloszenia);
  const stringQueery = "SELECT * FROM wiadomosc WHERE id_zgloszenia=? ORDER BY data_ ASC ;";
  const [rows] = await connection.execute(stringQueery, [idZgloszenia]);
  return rows;
};
module.exports = queryZgloszeniesWiadomosci;
