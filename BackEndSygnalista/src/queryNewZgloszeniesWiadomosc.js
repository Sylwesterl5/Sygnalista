const queryNewZgloszeniesWiadomosc = async (
  connection,
  { description, idZgloszenia }
) => {
  //await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);

  var newDate = new Date().toISOString();
  const stringQueery =
    "INSERT INTO wiadomosc (`id_wiadomosci`, `wiadomosc`, `data_`, `id_zgloszenia`, `pierwszy`, `wiadmoscOperatora`) VALUES (NULL, ?, ?, ?, '0', '0');";
  const [{ insertId }] = await connection.execute(stringQueery, [
    description,
    newDate,
    idZgloszenia,
  ]);

  return { id_wiadomosci: insertId };
};
module.exports = queryNewZgloszeniesWiadomosc;
