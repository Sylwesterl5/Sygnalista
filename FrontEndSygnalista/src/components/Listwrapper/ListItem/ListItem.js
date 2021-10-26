import React from "react";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button"

const ListItem = (props) => (
  <li>
    <div className={styles.list}>
      <div className={styles.wrapper}>
        <div className={styles.status}> {props.status}</div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.data}>{props.data}</p>
      </div>
      <p className={styles.description}>{props.description}</p>
      <Button>wjęcej</Button>
    </div>
  </li>
);

export default ListItem;
