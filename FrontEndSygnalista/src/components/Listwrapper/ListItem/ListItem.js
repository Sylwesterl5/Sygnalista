import React from "react";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button"

const ListItem = ({ status, title, data, description }) => {

  let classStatus = null;

  switch (status) {
    case '1':classStatus = styles.statusBegin;
      console.log(classStatus);
      break;
    case '2':classStatus = styles.statusWork;
      console.log(classStatus);
      break;
    case '3':classStatus = styles.statusEnd;
      console.log(classStatus);
      break;
    case '4':classStatus = styles.statusFaill;
      console.log(classStatus);
      break;
    default:classStatus = styles.statusBegin;
      console.log(classStatus)
      break;
  }

  return (
    <li>
      <div className={styles.list}>
        <div className={styles.wrapper}>
          <div className={`${classStatus} ${styles.status}`}></div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.data}>{data}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <Button>wjęcej</Button>
      </div>
    </li>
  );
}

export default ListItem;
