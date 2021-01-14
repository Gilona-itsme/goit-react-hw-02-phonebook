import React from "react";
import PropTypes from "prop-types";


import s from "./ContactItem.module.scss";

const ContactItem = ({ name, phone, onRemove }) => {
  return (
    <li className={s.item}>

      
      
      <p className={s.contact}>
        <span className={s.name}>{name}</span>:<span className={s.phone}>{phone}</span>
         <button className={s.button} type="button" onClick={onRemove}>
        Delete
      </button>
      </p>
     

      
          
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactItem;
