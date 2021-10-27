import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ tag: Tag, name, label, maxLenght }) => (
    <div className={styles.formItem} >
        <Tag
            className={Tag === 'textarea' ? styles.textarea : styles.input}
            type="text"
            name={name}
            id={name}
            required
            maxLenght={maxLenght}
            placeholder=" "
        />
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        <div className={styles.fromItemBar} />
    </div>
)

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.isRequired,
    label: PropTypes.isRequired,
    maxLenght: PropTypes.number,
}

Input.defaultProps = {
    tag: 'input',
    maxLenght: 200,
}

export default Input;