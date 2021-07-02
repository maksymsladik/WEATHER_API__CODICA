import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 500,
    margin: "10px",
    padding: "10px",
    boxShadow: "none",
    border: "2px solid hsl(0, 0%, 90%);",
    background: "#cccccc26",
  },
  list_info: {
    textAlign: "center",
  },
  item_info: {
    padding: "4px 0",
  },
});
