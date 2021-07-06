import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./makeStyles";
import { roundMath } from "../../../../../helpers";
import { DetailsWeatherToday } from "../../../../interfaces";
import style from "./style.module.css";

const InfoBlock: React.FC<DetailsWeatherToday> = ({ name, main, wind }) => {
  const classes = useStyles();

  if (!name) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <h3 className={style.title}>City: {name}</h3>
      <CardContent className={classes.list_info}>
        <Typography className={classes.item_info} component="h4">
          Temp: {roundMath(main!.temp)} &deg;C
        </Typography>
        <Typography className={classes.item_info} component="h4">
          Temp min: {roundMath(main!.temp_min)} &deg;C
        </Typography>
        <Typography className={classes.item_info} component="h4">
          Temp max: {roundMath(main!.temp_max)} &deg;C
        </Typography>
        <Typography className={classes.item_info} component="h4">
          Feels like: {roundMath(main!.feels_like)} &deg;C
        </Typography>
        <Typography className={classes.item_info} component="h4">
          Wind: {wind!.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBlock;
