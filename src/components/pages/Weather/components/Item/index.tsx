import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import { generateDetailWeatherUrl, roundMath } from "../../../../../helpers";
import { BriefInfoItemProps } from "../../../../interfaces";
import { useStyles } from "./makeStyles";

const Item: React.FC<BriefInfoItemProps> = ({
  index,
  name,
  main,
  time,
  removeLocation,
  fetchUpdateLocationData,
  clearLocationValue,
  dispatch,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {time}
      <CardActions className={classes.btns}>
        <IconButton
          onClick={() => dispatch(fetchUpdateLocationData(name, index))}
        >
          <UpdateIcon />
        </IconButton>

        <IconButton onClick={() => dispatch(removeLocation(index))}>
          <DeleteIcon />
        </IconButton>
      </CardActions>

      <CardContent className={classes.info}>
        <Typography variant="h5" component="h2">
          City: {name}
        </Typography>

        <Typography component="h4">
          Temp: {roundMath(main.temp)} &deg;C
        </Typography>

        <Typography component="h4">
          Feels like: {roundMath(main.feels_like)} &deg;C
        </Typography>
      </CardContent>

      <CardActions
        className={classes.btn}
        onClick={() => dispatch(clearLocationValue())}
      >
        <Link to={generateDetailWeatherUrl(name)}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
