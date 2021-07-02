import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../pages/Weather/redux/reducer";
import detailsWeatherReducer from "../pages/DetailsWeather/redux/reducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  detailsWeather: detailsWeatherReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
