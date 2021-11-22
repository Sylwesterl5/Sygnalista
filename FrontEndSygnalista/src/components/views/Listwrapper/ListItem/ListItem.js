import React, { useState, useCallback } from "react";
import styles from "./ListItem.module.scss";
import Button from "components/Button/Button";
import ResponseItemList from "../ResponseItemList/ResponseItemList";
import Form from "components/Form/Form";
import { postZgloszeniesWiadomosc } from "services/postZgloszeniesWiadomosc";

const ListItem = ({
  status,
  tytul: title,
  data_: data,
  wiadomosc: description,
  isZgloszenie = false,
  kod,
  id_zgloszenia,
}) => {
  let classStatus = null;

  switch (status) {
    case "1":
      classStatus = styles.statusBegin;
      console.log(classStatus);
      break;
    case "2":
      classStatus = styles.statusWork;
      console.log(classStatus);
      break;
    case "3":
      classStatus = styles.statusEnd;
      console.log(classStatus);
      break;
    case "4":
      classStatus = styles.statusFaill;
      console.log(classStatus);
      break;
    default:
      classStatus = styles.statusBegin;
      console.log(classStatus);
      break;
  }

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
      <div className={styles.list}>
        <div className={styles.wrapper}>
          <div className={`${classStatus} ${styles.status}`}></div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.data}>{data}</p>
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
    </li>
  );
};

export default ListItem;
