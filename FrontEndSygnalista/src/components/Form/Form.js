import React, { useCallback, useState } from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Button from "components/Button/Button";
import styles from "./Form.module.scss";

const Form = ({ submitFn, idZgloszenia }) => {
  const [titleValue, setTitleValue] = useState("");
  const handleTitleValueChange = useCallback((e) => {
    setTitleValue(e.target.value);
  }, []);

  const [descriptionValue, setDescriptionValue] = useState("");
  const handleDescriptionValueChange = useCallback((e) => {
    setDescriptionValue(e.target.value);
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      submitFn({
        ...(!idZgloszenia && { title: titleValue }),
        ...(!idZgloszenia && { status: "1" }),
        description: descriptionValue,
        ...(idZgloszenia && { idZgloszenia }),
      });
    },
    [descriptionValue, idZgloszenia, submitFn, titleValue]
  );
  const keyDownHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        submitHandler(e);
      }
    },
    [submitHandler]
  );

  return (
    <div className={styles.wrapper}>
      <Title>Dodaj zgłoszenie</Title>
      <form
        autoComplete="off"
        className={styles.form}
        onSubmit={submitHandler}
        onKeyDown={keyDownHandler}
      >
        {!idZgloszenia && (
          <Input
            name="status"
            label="Status"
            statusstart="1"
            defaultValue="1"
            invisible={true}
          />
        )}
        {!idZgloszenia && (
          <Input
            name="title"
            label="Tytuł"
            onChange={handleTitleValueChange}
            value={titleValue}
          />
        )}
        <Input
          tag="textarea"
          name="description"
          label="Zgłoszenie"
          maxLength={1000}
          onChange={handleDescriptionValueChange}
          value={descriptionValue}
        />
        <Button type="submit">
          {idZgloszenia ? "Odpisz" : "Dodaj zgłoszenie"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
