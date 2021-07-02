import { Dispatch } from "redux";
import Http from "../../../../lib/http";
import { addLocation, updateLocation, setLoadingStatus } from "./reducer";
import { setDate, setSwal, regExp, checkIncludes } from "../../../../helpers";
import { LocationDataWeather } from "../../../interfaces";

const http = new Http();

export const fetchLocationData = (
  location: string,
  listLocation: Array<LocationDataWeather>
) => {
  return async (dispatch: Dispatch) => {
    try {
      const valid = regExp(location);

      if (!valid) {
        dispatch(setLoadingStatus(false));
        setSwal("Enter location!");

        return;
      }

      const { data } = await http.fetchWeather(location);

      const includesItem = checkIncludes(data, listLocation);

      if (includesItem) {
        dispatch(setLoadingStatus(false));
        setSwal("Already added!");
        return;
      }

      const city = setDate(data);

      dispatch(addLocation(city));
    } catch (e) {
      dispatch(setLoadingStatus(false));
      setSwal("Nothing found!");
    }
  };
};

export const fetchUpdateLocationData = (location: string, index: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await http.fetchWeather(location);

      const city = setDate(data);

      dispatch(updateLocation({ location: city, index }));
    } catch (e) {
      setSwal("Something wrong!");
    }
  };
};
