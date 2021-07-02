import React, { useEffect } from "react";
import Loading from "../../modules/Loading";
import Input from "./components/Input";
import Btn from "./components/Btn";
import List from "./components/List";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  fetchLocationData,
  fetchUpdateLocationData,
} from "./redux/actionsTypes";
import {
  setLocationValue,
  removeLocation,
  setLoadingStatus,
  clearLocationValue,
} from "./redux/reducer";
import style from "./style.module.css";

const Weather: React.FC = () => {
  const {
    locationValue,
    saveListLocationToLocalStorage,
    listLocationDataWeather,
    loading,
  } = useAppSelector((state) => state.weather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (saveListLocationToLocalStorage.length === 0) {
      const listOfCities = JSON.parse(
        localStorage.getItem("location") || "[]"
      ) as Array<string>;

      if (listOfCities.length !== 0) {
        dispatch(setLoadingStatus(true));

        listOfCities.map((item: string) =>
          dispatch(fetchLocationData(item, listLocationDataWeather))
        );

        setTimeout(() => {
          dispatch(setLoadingStatus(false));
        }, 300);
      } else {
        setTimeout(() => {
          dispatch(setLoadingStatus(false));
        }, 300);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "location",
      JSON.stringify(saveListLocationToLocalStorage)
    );
  }, [saveListLocationToLocalStorage]);

  const findLocationClearValue = async () => {
    dispatch(setLoadingStatus(true));
    dispatch(clearLocationValue());
    await dispatch(fetchLocationData(locationValue, listLocationDataWeather));
    setTimeout(() => {
      dispatch(setLoadingStatus(false));
    }, 200);
  };

  return (
    <>
      {loading && <Loading />}

      <div className={style.search_panel}>
        <Input
          locationValue={locationValue}
          setLocationValue={setLocationValue}
          dispatch={dispatch}
        />

        <Btn findLocationClearValue={findLocationClearValue} />
      </div>

      {!listLocationDataWeather.length ? (
        <h3 className={style.info}>Empty!</h3>
      ) : (
        <List
          listLocationDataWeather={listLocationDataWeather}
          removeLocation={removeLocation}
          fetchUpdateLocationData={fetchUpdateLocationData}
          clearLocationValue={clearLocationValue}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default Weather;
