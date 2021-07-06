import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import Loading from "../../modules/Loading";
import Select from "./components/Select";
import Table from "./components/Table";
import InfoBlock from "./components/InfoBlock";
import { setSelectedDay } from "./redux/reducer";
import { fetchGetDetailLocationAction } from "./redux/actionsTypes";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { RouteParams } from "../../interfaces";
import style from "./style.module.css";

const DetailsWeather: React.FC<RouteComponentProps<RouteParams>> = (props) => {
  const { id } = props.match.params;

  const {
    weatherForecast,
    detailsWeatherToday,
    dataDays,
    selectedDay,
    loading,
  } = useAppSelector((state) => state.detailsWeather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetDetailLocationAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loading />}

      <div className={style.info}>
        <InfoBlock {...detailsWeatherToday} />

        <Select
          dataDays={dataDays}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          dispatch={dispatch}
        />
      </div>

      <Table weatherForecast={weatherForecast} selectedDay={selectedDay} />
    </>
  );
};

export default DetailsWeather;
