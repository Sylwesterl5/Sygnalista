import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, href, buttonListWeight, ...rest }) => (
  <>
    {href ? (
      <a
        href={href}
        target="_blank"
        className={styles.button}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <button {...rest} className={buttonListWeight? styles.buttonListWrapper : styles.button}>
        {children}
      </button>
    )}
  </>
);

export default Button;
