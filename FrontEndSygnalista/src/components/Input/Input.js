import React from "react";
import PropTypes from "prop-types";
import styles from "./input.module.scss";

const Input = ({
  tag: Tag,
  name,
  label,
  maxLenght,
  invisible,
  upperStyle,
  uppercase,
  ...rest
}) => (
  <div className={invisible ? styles.invisible : styles.formItem}>
    <Tag
      {...rest}
      className={(Tag === "textarea" ? styles.textarea : styles.input)}
      name={name}
      id={name}
      //maxLenght={maxLenght}
      required
      placeholder=" "
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.fromItemBar} />
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLenght: PropTypes.number,
};

Input.defaultProps = {
  tag: "input",
  maxLenght: 200,
  type: "text",
  invisible: false,
  uppercase: false,
};

export default Input;
