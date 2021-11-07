import React from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Title from "../Title/Title";
import styles from './SignIn.module.scss';

const SignIn = (submitSignIn) => (
    <div className={styles.wrapper}>
        <Title>Zaloguj się</Title>
        <form autoComplete="off" className={styles.form} onSubmit={submitSignIn}>
            <Input name='login' label='login' />
            <Input name='password' label='password' value='password' type='password' placeholder="*********" />
            <Button type='submit'>Zaloguj</Button>
        </form>

    </div>
);


export default SignIn;