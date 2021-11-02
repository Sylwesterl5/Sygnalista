import React from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Button from "components/Button/Button";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Dodaj zgłoszenie</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input name="name" label="Name" maxLength={30} />
      <Input name="link" label="Twitter link" />
      <Input name="image" label="Image" />
      <Input tag="textarea" name="description" label="Description" />
      <Button type="submit">add new item</Button>
    </form>
  </div>
);

export default Form;
