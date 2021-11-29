import React from "react";
import ListItem from "./ListItem/ListItem";
import SortStatusListWrapper from "components/SortStatusListWrapper/SortStatusListWrapper"
import styles from "./ListWrapper.module.scss";
import { useWiadomosci } from "providers/wiadomosci";

const ListWrapper = () => {
  const [wiadomosci] = useWiadomosci();

  return (
    <>
      <SortStatusListWrapper/>
      <ul className={styles.wrapper}>
        {wiadomosci.map((item) => (
          <ListItem key={item.id_zgloszenia} {...item} isZgloszenie={true} />
        ))}
      </ul>
    </>
  );
};

export default ListWrapper;
