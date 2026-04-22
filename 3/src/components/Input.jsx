import React from "react";

export const Input = ({
  type,
  placeholder,
  onChange,
  value,
  name,
  setToggle,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
      {name === "passwordButton" && (
        <button type="button" onMouseOver={setToggle} className="eye">
          <i
            className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}
          ></i>
        </button>
      )}
    </div>
  );
};
