import { Switch, Route } from "react-router-dom";
import Weather from "../pages/Weather";
import DetailsWeather from "../pages/DetailsWeather";
import * as paths from "./paths";

function Router() {
  return (
    <Switch>
      <Route path={paths.BaseUrl} exact component={Weather} />
      <Route path={paths.DetailsUrl} exact component={DetailsWeather} />
    </Switch>
  );
}

export default Router;
