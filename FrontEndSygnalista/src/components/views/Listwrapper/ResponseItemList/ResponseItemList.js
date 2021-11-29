import { useEffect, useState } from "react";
import { getZgloszeniesWiadomosci } from "services/getZgloszeniesWiadomosci";
import ListItem from "../ListItem/ListItem";

const ResponseItemList = ({ idZgloszenia, code, lastWiadomoscId }) => {
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    getZgloszeniesWiadomosci({ idZgloszenia }).then((wiadomosciList) => {
      setResponses(wiadomosciList);
    });
  }, [idZgloszenia, code, lastWiadomoscId]);

  return (
    <ul>
      {responses.map((item) => (
        <ListItem key={item.id_wiadomosci} {...item} isZgloszenie={false} status={null} />
      ))}
    </ul>
  );
};
export default ResponseItemList;
