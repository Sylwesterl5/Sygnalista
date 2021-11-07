import React from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Button from "components/Button/Button";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Dodaj zgłoszenie</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input name="status" label="Status" statusStart="4" />
      <Input name="title" label="Tytuł" />
      <Input name="data" label="Data" />
      <Input tag="textarea" name="description" label="Zgłoszenie" maxLength={1000} />
      <Button type="submit">Dodaj zgłoszenie</Button>
    </form>
  </div>
);

export default Form;
