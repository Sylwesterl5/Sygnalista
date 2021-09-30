import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWrapper.module.css";
import { listApplications } from "data/ListApplications";

const ListWrapper = () => (
  <ul className={styles.wrapper}>
    {listApplications.map((item) => (
      <ListItem
        status={item.status}


        title={item.title}
        data={item.data}
        description={item.description}
      />
    ))}
  </ul>
);

export default ListWrapper;
