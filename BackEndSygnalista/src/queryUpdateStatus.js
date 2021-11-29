const queryUpdateStatus = async (connection, zgloszenieId, status) => {
  const stringQueery =
    "UPDATE zgloszenie SET status=? WHERE id_zgloszenia = ?;";
  await connection.execute(stringQueery, [status, zgloszenieId]);

  const [rows] = await connection.execute(
    "SELECT * FROM zgloszenie  WHERE id_zgloszenia = ?",
    [zgloszenieId]
  );
  return rows[0];
};
module.exports = queryUpdateStatus;
