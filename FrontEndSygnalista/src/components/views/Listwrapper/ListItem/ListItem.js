import React, { useState, useCallback, useRef } from "react";
import styles from "./ListItem.module.scss";
import Button from "components/Button/Button";
import ResponseItemList from "../ResponseItemList/ResponseItemList";
import Form from "components/Form/Form";
import { postZgloszeniesWiadomosc } from "services/postZgloszeniesWiadomosc";
import { putZgloszeniesWiadomosc } from "services/putZgloszeniesWiadomosc";
import StatusInput from "./StatusInput";
import Input from "../../../Input/Input";

const ListItem = ({
  status,
  tytul: title,
  date_zgloszenia: data,
  wiadomosc: description,
  isZgloszenie = false,
  kod,
  id_zgloszenia,
  isEditable = false,
  id_wiadomosci,
}) => {
  console.log('id wiadomośćo', id_wiadomosci)
  const updateInputRef = useRef() //referencja do inputa
  const [showMore, setShowMore] = useState(false);
  const [lastWiadomoscId, setLastWiadomoscId] = useState(""); // na potrzeby odswiezania listy
  const buttonListWeight = true;

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

  const updateFn = useCallback(
    async () => {
 
      const updatedWiadomsoc = updateInputRef.current.value;
      // zaczytaj obecna wartosc z inputa
      await putZgloszeniesWiadomosc(//nazwa handlera afsdkjgklsjdsj
        id_zgloszenia,
        id_wiadomosci,
        updatedWiadomsoc
      );
      setLastWiadomoscId(Math.random());
    },
    [id_wiadomosci, id_zgloszenia]
  );



  return (
    <li className={styles.listyle}>
      <div className={styles.marginTop}>
        <div className={styles.list}>
          <div className={styles.wrapper}>
            <StatusInput status={status} idZgloszenia={id_zgloszenia} />
            <p className={styles.data}>{new Date(data).toLocaleString()}</p>
            {isEditable && <div>make editable version</div>}
            <h2 className={styles.kod}>{kod}</h2>
          </div>
          <h2 className={styles.title}>{title}</h2>
          {isEditable ? (
           <> 
           <Input
           ref={updateInputRef}
              tag="textarea"
              name="description"
              label="Zgłoszenie"
              maxLength={2000}
              defaultValue={description}
            />
            <Button onClick={updateFn}>Zmień</Button>
            </>) : (<p className={styles.description}>{description}</p>)}
          {isZgloszenie && (
            <div className={styles.addFlexDiv}>
              <div className={styles.buttonMargin} />
              <Button
                buttonListWeight={buttonListWeight}
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
              <div className={styles.buttonMargin} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
