const queryZgłoseniasSortStatus = async (connection, status) => {
  const stringQueery = "SELECT * FROM zgloszenie WHERE status=?;";
  const [rows] = await connection.execute(stringQueery, [status]);
  return rows;
};
module.exports = queryZgłoseniasSortStatus;
