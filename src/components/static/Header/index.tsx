import React from "react";
import { Link } from "react-router-dom";
import SetSvgIcon from "./components/SetSvgIcon";
import style from "./style.module.css";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to="/">
          <SetSvgIcon color="action" fontSize="large" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
