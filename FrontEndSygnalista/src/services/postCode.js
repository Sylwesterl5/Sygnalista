import { API } from "const";

export const postCode = async ({ code, query }) => {
  // query
  // {status: 4}

  const endpoint =
    `${API}/api/zgloszenias` +
    (query ? `?${new URLSearchParams(query)}` : "");

  console.log(endpoint);

  const result = await fetch(endpoint, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ code }), // body data type must match "Content-Type" header
  });
  const dataResult = await result.json();
  return dataResult;
};
