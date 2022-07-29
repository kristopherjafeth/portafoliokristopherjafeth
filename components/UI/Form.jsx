import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form action="https://www.actionforms.io/e/r/kristopherjafeth" method="POST" className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input name="name" type="text" placeholder="Tu nombre" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input name="email" type="email" placeholder="Correo Corporativo" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea name="text" type="text" rows={5} placeholder="Mensaje" required />
      </div>

      <button className="primary__btn" type="submit">
        Enviar Mensaje
      </button>
    </form>
  );
};

export default Form;
