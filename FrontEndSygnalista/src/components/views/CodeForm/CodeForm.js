/* eslint-disable jsx-a11y/alt-text */
import { useCallback, useState } from "react";
import Button from "components/Button/Button";
import { postCode } from "services/postCode";
import { useWiadomosci, useCode } from "providers/wiadomosci";
import { useNavigate } from "react-router-dom";
import Input from "components/Input/Input";
import styles from "./CodeForm.module.scss";
import imageBCO from "../../../data/BCO_logo.png";

const CodeForm = () => {
  let navigate = useNavigate();
  const [, setWiadomosci] = useWiadomosci();
  const [, setContextCode] = useCode();
  const [code, setCode] = useState("");

  const submitCode = useCallback(
    (e) => {
      e.preventDefault();
      postCode({ code }).then((wiadomosciList) => {
        if (wiadomosciList?.error === "wrongCode") {
          alert("Nieprawidłowy kod dostępu kod zawiera 8 znaków");
        } else {
          setContextCode(code);
          setWiadomosci(wiadomosciList);
          navigate("/wiadomosci");
        }
      });
    },
    [code, navigate, setContextCode, setWiadomosci],
    
   
  );

  return (
    <div className={styles.contener}>
      <div className={styles.one}>
        <img className={styles.image} src={imageBCO} />
      </div>
      <form className={styles.form} noValidate onSubmit={submitCode}>
        <div className={styles.inputWeight}>
          <Input
            name="accessCode"
            label="Kod Dostępu"
            type="text"
            value={code}
            maxLenght={8}
            uppercase={true}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
        </div>
        <Button onClick={submitCode}>Pokaz wątek</Button>
      </form>
      <div className={styles.three}></div>
   </div>
  );
};

export default CodeForm;
