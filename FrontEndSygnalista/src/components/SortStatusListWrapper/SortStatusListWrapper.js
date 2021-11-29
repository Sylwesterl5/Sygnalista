import React, { useCallback } from "react";
import styles from "./SortStatusListWrapper.module.scss";

import { postCode } from "services/postCode";
import { useWiadomosci, useCode } from "providers/wiadomosci";

const SortStatusListWrapper = ({ status }) => {
  const [, setWiadomosci] = useWiadomosci();
  const [code] = useCode();

  const selectNewStatusHandler = useCallback(
    (e) => {
      postCode({ code, query: { status: e.target.value } }).then(
        (wiadomosciList) => {
          if (wiadomosciList?.error === "wrongCode") {
            alert("Nieprawidłowy kod dostępu kod zawiera 8 znaków");
          } else {
            setWiadomosci(wiadomosciList);
          }
        }
      );
    },
    [code, setWiadomosci]
  );

  return (
    <div className={styles.styleSelect}>
      <label for="status-select">wybierz status:</label>

      <select
        name="status"
        id="status-select"
        onChange={selectNewStatusHandler}
      >
        <option value="*">Wszystkie</option>
        <option value="1">Startowe zgłoszenia</option>
        <option value="2">W trakcie rozwiązywania problemów</option>
        <option value="3">Zakończone sukcesem</option>
        <option value="4">Zakończone niepowodzeniem</option>
      </select>
    </div>
  );
};

export default SortStatusListWrapper;