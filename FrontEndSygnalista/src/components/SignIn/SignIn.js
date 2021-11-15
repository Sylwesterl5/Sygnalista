import React from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Title from "../Title/Title";
import styles from './SignIn.module.scss';

const SignIn = ({submitSignIn}) => (
    <div className={styles.wrapper}>
        <Title>Dodaj zgłoszenie</Title>
        <Title>Zaloguj się</Title>
        <form autoComplete="off" className={styles.form} onSubmit={submitSignIn}>
            <Input name='Kod dostępu' label='Kod dostępu' />
            <Input name='password' label='password' type='password' placeholder="*********" />
            <Button type='submit'>Potwierdź</Button>
        </form>
    </div>
);


export default SignIn;