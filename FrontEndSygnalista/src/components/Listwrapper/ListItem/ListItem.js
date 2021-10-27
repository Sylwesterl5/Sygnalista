import React from "react";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button"


const ListItem = ({ status, title, data, description }) => {

  return (
    <li>
      <div className={styles.list}>
        <div className={styles.wrapper}>
          <div className={styles.status}>{status}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.data}>{data}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <Button>wjęcej</Button>
      </div>
    </li>
  );
}




// status = { item.status }
// title = { item.title }
// data = { item.data }
// description = { item.description }


// const ListItem = (props) => (
//   <li>
//     <div className={styles.list}>
//       <div className={styles.wrapper}>
//         <div className={styles.status}> {props.status}</div>
//         <h2 className={styles.title}>{props.title}</h2>
//         <p className={styles.data}>{props.data}</p>
//       </div>
//       <p className={styles.description}>{props.description}</p>
//       <Button>wjęcej</Button>
//     </div>
//   </li>
// );

export default ListItem;
