import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationDataWeather, WeatherReducerState } from "../../../interfaces";

const weatherReducer = createSlice({
  name: "weather",
  initialState: {
    locationValue: "",
    saveListLocationToLocalStorage: [],
    listLocationDataWeather: [],
    loading: true,
  } as WeatherReducerState,
  reducers: {
    setLocationValue(state, action: PayloadAction<string>) {
      state.locationValue = action.payload;
    },

    addLocation(state, action: PayloadAction<LocationDataWeather>) {
      state.saveListLocationToLocalStorage.unshift(action.payload.name);
      state.listLocationDataWeather.unshift(action.payload);
    },

    removeLocation(state, action: PayloadAction<number>) {
      state.saveListLocationToLocalStorage.splice(action.payload, 1);
      state.listLocationDataWeather.splice(action.payload, 1);
    },

    updateLocation(
      state,
      action: PayloadAction<{ location: LocationDataWeather; index: number }>
    ) {
      state.listLocationDataWeather.splice(
        action.payload.index,
        1,
        action.payload.location
      );
    },

    setLoadingStatus(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    clearLocationValue(state) {
      state.locationValue = "";
    },
  },
});

export const {
  setLocationValue,
  addLocation,
  removeLocation,
  updateLocation,
  setLoadingStatus,
  clearLocationValue,
} = weatherReducer.actions;

export default weatherReducer.reducer;
