import { Dispatch } from "redux";
import Http from "../../../../lib/http";
import { roundMath, setSwal } from "../../../../helpers";
import { setDataWeather, setLoadingStatus } from "./reducer";
import { WeatherForecastData, ItemDay } from "../../../interfaces";

const http = new Http();

export const fetchGetDetailLocationAction = (location: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatus(true));

      const { data: detailsWeatherToday } = await http.fetchWeather(location);

      const { data: days } = await http.fetcDetailhWeather(location);

      const dataDays: Array<string> = [];

      const weatherForecast = days.list.reduce(
        (ac: WeatherForecastData[], itemDay: ItemDay) => {
          const time = itemDay.dt_txt.slice(-8, -3);
          const day = itemDay.dt_txt.slice(5, 10);
          const degrees = roundMath(itemDay.main.temp);

          ac.push({ time, day, degrees });

          if (!dataDays.includes(day)) {
            dataDays.push(day);
          }

          return ac;
        },
        []
      );

      dispatch(
        setDataWeather({
          detailsWeatherToday,
          weatherForecast,
          dataDays,
          selectedDay: dataDays[0],
        })
      );

      dispatch(setLoadingStatus(false));
    } catch (e) {
      dispatch(setLoadingStatus(false));
      setSwal("Something wrong!", "Redirect on the home page...").then(
        (response) => {
          if (response) {
            window.location.href = "/";
          }
        }
      );
    }
  };
};
