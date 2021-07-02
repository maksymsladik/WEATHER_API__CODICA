import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import List from "./components/List";
import { useStyles } from "./makeStyles";
import { SelectProps } from "../../../../interfaces";

const Select: React.FC<SelectProps> = ({
  dataDays,
  selectedDay,
  setSelectedDay,
  dispatch,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        value={selectedDay}
        onChange={(e) => dispatch(setSelectedDay(e.target.value))}
      >
        <List dataDays={dataDays} />
      </NativeSelect>
      <FormHelperText>Select day</FormHelperText>
    </FormControl>
  );
};

export default Select;
