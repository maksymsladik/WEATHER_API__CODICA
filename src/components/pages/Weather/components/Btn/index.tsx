import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./makeStyles";
import { BtnProps } from "../../../../interfaces";
import style from "./style.module.css";

const Btn: React.FC<BtnProps> = ({ findLocationClearValue }) => {
  const classes = useStyles();

  return (
    <div className={style.btn_add}>
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        onClick={() => findLocationClearValue()}
      >
        Search
      </Button>
    </div>
  );
};

export default Btn;
