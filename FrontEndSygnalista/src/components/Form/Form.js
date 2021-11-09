import React, { useCallback, useState } from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Button from "components/Button/Button";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => {
  

  const [titleValue, setTitleValue] = useState("");
  const handleTitleValueChange = useCallback((e)=>{
    setTitleValue(e.target.value)
  },[])

  const [descriptionValue, setDescriptionValue] = useState("");
  const handleDescriptionValueChange = useCallback((e)=>{
    setDescriptionValue(e.target.value)
  },[])

  const keyDownHandler = useCallback((e)=>{
    if (e.key === 'Enter') {
      submitFn({
        title: titleValue,
        description: descriptionValue
      });
    }
  },[submitFn, titleValue, descriptionValue])
  
  
  return <div className={styles.wrapper}>
    <Title>Dodaj zgłoszenie</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn} onKeyDown={keyDownHandler} >
      <Input name="status" label="Status" statusStart="1" value='1' invisible={true} />
      <Input name="title" label="Tytuł" onChange={handleTitleValueChange} value={titleValue} />
      <Input tag="textarea" name="description" label="Zgłoszenie" maxLength={1000}  onChange={handleDescriptionValueChange} value={descriptionValue} />
      <Button type="submit">Dodaj zgłoszenie</Button>
    </form>
  </div>
};

export default Form;
