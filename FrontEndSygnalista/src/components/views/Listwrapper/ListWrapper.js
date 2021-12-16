import React, { useMemo } from "react";
import ListItem from "./ListItem/ListItem";
import SortStatusListWrapper from "components/SortStatusListWrapper/SortStatusListWrapper"
import styles from "./ListWrapper.module.scss";
import { useWiadomosci } from "providers/wiadomosci";

const ListWrapper = () => {
  const [wiadomosci] = useWiadomosci();
  console.log(wiadomosci);

  
  return (
    <>
      <SortStatusListWrapper/>
      <ul className={styles.wrapper}>
        {wiadomosci.rows.map((item) => (
          <ListItem key={item.id_zgloszenia} {...item} isZgloszenie={true} isAdmin={wiadomosci.admin}/>
        ))}
      </ul>
    </>
  );
};

export default ListWrapper;
