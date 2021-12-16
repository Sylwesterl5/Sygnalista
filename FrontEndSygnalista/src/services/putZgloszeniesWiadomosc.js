

export const putZgloszeniesWiadomosc = async (id_zgloszenia, id_wiadomosci, updatedWiadomsoc) => {
    const result = await fetch(`http://localhost:3000/api/zgloszenieUpdateWiadomosc`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_wiadomosci, updatedWiadomsoc }),
    });
    const dataResult = await result.json();
    return dataResult;
  };