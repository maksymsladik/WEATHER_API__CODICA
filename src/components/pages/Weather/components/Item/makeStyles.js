import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minWidth: 220,
    minHeight: 220,
    padding: "5px",
    margin: "7px",
    background: "#cccccc26",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  btns: {
    justifyContent: "space-between",
    padding: "0 8px",
  },
  btn: {
    justifyContent: "flex-end",
    padding: "0 8px",
  },
  info: {
    padding: "0 16px",
  },
});
