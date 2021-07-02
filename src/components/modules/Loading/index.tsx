import React from "react";
import style from "./style.module.css";

const Loading: React.FC = () => {
  return (
    <div className={style.loading}>
      <div className={style["lds-spinner"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
