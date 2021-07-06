import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DetailsWeatherState,
  WeatherForecastData,
  DetailsWeatherToday,
} from "../../../interfaces";

const detailsWeatherReducer = createSlice({
  name: "detailsWeather",
  initialState: {
    detailsWeatherToday: {},
    weatherForecast: [],
    dataDays: [],
    selectedDay: "",
    loading: true,
  } as DetailsWeatherState,
  reducers: {
    setDataWeather(
      state,
      action: PayloadAction<{
        selectedDay: string;
        dataDays: Array<string>;
        weatherForecast: Array<WeatherForecastData>;
        detailsWeatherToday: DetailsWeatherToday;
      }>
    ) {
      state.selectedDay = action.payload.selectedDay;
      state.weatherForecast = action.payload.weatherForecast;
      state.dataDays = action.payload.dataDays;
      state.detailsWeatherToday = action.payload.detailsWeatherToday;
    },

    setSelectedDay(state, action: PayloadAction<string>) {
      state.selectedDay = action.payload;
    },

    setLoadingStatus(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setDataWeather, setSelectedDay, setLoadingStatus } =
  detailsWeatherReducer.actions;

export default detailsWeatherReducer.reducer;
