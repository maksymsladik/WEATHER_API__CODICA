import React from "react";
import { InputProps } from "../../../../interfaces";
import style from "./style.module.css";

const Input: React.FC<InputProps> = ({
  locationValue,
  setLocationValue,
  dispatch,
}) => {
  return (
    <div className={style.search}>
      <input
        value={locationValue}
        onChange={(e) => dispatch(setLocationValue(e.target.value))}
        type="text"
        placeholder="Search city"
        className={style.search_input}
      />
    </div>
  );
};

export default Input;
