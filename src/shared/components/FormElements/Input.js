import React from "react";

import "./Input.css";

const Input = (props) => {
  // The component decides which element to render (an <input> or a <textarea>) based on the props.element value.
  // If props.element is equal to "input", it renders an <input> element; otherwise, it renders a <textarea> element.
  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
