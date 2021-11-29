import { useCallback, useState } from "react";
import { putZgloszeniesStatus } from "services/putZgloszeniesStatus";
import styles from "./ListItem.module.scss";
import { useWiadomosci } from "providers/wiadomosci";

const StatusInput = ({ status, idZgloszenia }) => {
  let classStatus = null;
  const [selectVisible, setSelectVisible] = useState(false);
  const toggleSelect = useCallback(() => {
    setSelectVisible(!selectVisible);
  }, [selectVisible]);
  const [wiadomosci, setWiadomosci] = useWiadomosci();

  const handleSelectNewStatus = useCallback((e) => {
    putZgloszeniesStatus({ idZgloszenia, status:e.target.value }).then((updatedWiadomosc) => {
      const wiadomosciCopy = [...wiadomosci]
      const updatedWiadomoscIndex = wiadomosciCopy.findIndex(({id_zgloszenia})=>id_zgloszenia===idZgloszenia)
      console.log(updatedWiadomoscIndex)
      wiadomosciCopy.splice(updatedWiadomoscIndex,1,updatedWiadomosc);
      console.log(wiadomosciCopy)
      setWiadomosci(wiadomosciCopy)
    });
  }, [idZgloszenia, setWiadomosci, wiadomosci]);

  switch (status) {
    case "1":
      classStatus = styles.statusBegin;
      break;
    case "2":
      classStatus = styles.statusWork;
      break;
    case "3":
      classStatus = styles.statusEnd;
      break;
    case "4":
      classStatus = styles.statusFaill;
      break;
    case null:
      classStatus = styles.statusHidden;
      break;
    default:
      classStatus = styles.statusBegin;
      break;
  }
  return (
    <>
      <div
        onClick={toggleSelect}
        className={`${classStatus} ${styles.status}`}
      ></div>
      {selectVisible && (
        <select onChange={handleSelectNewStatus} defaultValue={status}>
          <option  value="1">
            Status 1
          </option>
          <option  value="2">
            Status 2
          </option>
          <option  value="3">
            Status 3
          </option>
          <option  value="4">
            Status 4
          </option>
        </select>
      )}
    </>
  );
};

export default StatusInput;
