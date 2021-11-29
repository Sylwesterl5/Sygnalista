import React, { useState, useCallback } from "react";
import styles from "./ListItem.module.scss";
import Button from "components/Button/Button";
import ResponseItemList from "../ResponseItemList/ResponseItemList";
import Form from "components/Form/Form";
import { postZgloszeniesWiadomosc } from "services/postZgloszeniesWiadomosc";
import StatusInput from "./StatusInput";

const ListItem = ({
  status,
  tytul: title,
  data_: data,
  wiadomosc: description,
  isZgloszenie = false,
  kod,
  id_zgloszenia, 
}) => {
  const [showMore, setShowMore] = useState(false);
  const [lastWiadomoscId, setLastWiadomoscId] = useState("");

  const submitFn = useCallback(
    async (data) => {
      const { id_wiadomosci } = await postZgloszeniesWiadomosc(
        id_zgloszenia,
        data
      );
      setLastWiadomoscId(id_wiadomosci);
    },
    [id_zgloszenia]
  );

  return (
    <li className={styles.listyle}>
      <div className={styles.marginTop}>
        <div className={styles.list}>
          <div className={styles.wrapper}>
            <StatusInput status={status} idZgloszenia={id_zgloszenia} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.data}>{new Date(data).toLocaleString()}</p>
          </div>
          <p className={styles.description}>{description}</p>
          {isZgloszenie && (
            <>
              <Button
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                {showMore ? "mniej" : "więcej"}
              </Button>
              {showMore && (
                <>
                  <ResponseItemList
                    idZgloszenia={id_zgloszenia}
                    lastWiadomoscId={lastWiadomoscId}
                  />
                  <Form idZgloszenia={id_zgloszenia} submitFn={submitFn} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
