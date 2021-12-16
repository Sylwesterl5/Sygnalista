import { API } from "const";

export const putZgloszeniesStatus = async (data) => {
  const result = await fetch(`${API}/api/zgloszenieStatus`, {
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
