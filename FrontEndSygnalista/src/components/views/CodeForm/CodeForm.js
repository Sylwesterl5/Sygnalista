import { useCallback, useState } from "react";
import Button from "components/Button/Button";
import { postCode } from "services/postCode";
import { useWiadomosci, useCode } from "providers/wiadomosci";
import { useNavigate } from "react-router-dom";
import Input from "components/Input/Input";
import styles from "./CodeForm.module.scss";

const CodeForm = () => {
  let navigate = useNavigate();
  const [, setWiadomosci] = useWiadomosci();
  const [, setContextCode] = useCode();
  const [code, setCode] = useState("");

  const submitCode = useCallback(
    (e) => {
      e.preventDefault();
      postCode({ code }).then((wiadomosciList) => {
        console.log(wiadomosciList);
        if (wiadomosciList?.error === "wrongCode") {
          alert("Nieprawidłowy kod dostępu");
        } else {
          setContextCode(code);
          setWiadomosci(wiadomosciList);
          navigate("/wiadomosci");
        }
      });
    },
    [code, navigate, setContextCode, setWiadomosci]
  );

  return (
    <form className={styles.form} noValidate onSubmit={submitCode}>
      <Input
        name="accessCode"
        label="Kod Dostępu"
        type="text"
        value={code}
        onChange={(event) => {
          setCode(event.target.value);
        }}
      />
      <Button onClick={submitCode}>Pokaz watek</Button>
    </form>
  );
};

export default CodeForm;
