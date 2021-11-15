import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWrapper.module.scss";
import { useWiadomosci } from "providers/wiadomosci";

const ListWrapper = () => {
  const [wiadomosci] = useWiadomosci();

  return (
    <ul className={styles.wrapper}>
      {wiadomosci.map((item) => (
        <ListItem key={item.wiadomosc} {...item} isZgloszenie={true} />
      ))}
    </ul>
  );
};

export default ListWrapper;
