import React from 'react';

import style from './Button.module.scss'

const PrimeryButton = ({ children, className, ...restProps }) => {
    const classList = [className, style.button].join(" ")
    return (
        <button className={classList} {...restProps}>{children}</button>
    );
};



export default PrimeryButton;