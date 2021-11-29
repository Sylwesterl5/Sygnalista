export const putZgloszeniesStatus = async (data) => {
  const result = await fetch(`http://localhost:3000/api/zgloszenieStatus`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataResult = await result.json();
  return dataResult;
};
