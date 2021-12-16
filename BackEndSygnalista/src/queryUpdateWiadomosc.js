const queryUpdateWiadomosc = async (
  connection,
  updatedWiadomsoc,
  id_wiadomosci
) => {
  const stringQueery =
    "UPDATE wiadomosc set wiadomosc=? where id_wiadomosci=?;";
  const [rows] = await connection.execute(stringQueery, [
    updatedWiadomsoc,
    id_wiadomosci,
  ]);
  return rows;
};
module.exports = queryUpdateWiadomosc;
