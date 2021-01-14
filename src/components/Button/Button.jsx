import React from 'react';


import style from './Button.module.scss'

const Button = ({type, title}) => {
    return (
        <button type={type} className={style.button} >{title}</button>
    );
};



export default Button;