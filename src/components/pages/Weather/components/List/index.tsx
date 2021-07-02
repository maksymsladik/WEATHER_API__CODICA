import React from "react";
import Item from "../Item";
import {
  BriefInfoIListProps,
  LocationDataWeather,
} from "../../../../interfaces";
import style from "./style.module.css";

const List: React.FC<BriefInfoIListProps> = ({
  listLocationDataWeather,
  removeLocation,
  fetchUpdateLocationData,
  clearLocationValue,
  dispatch,
}) => {
  return (
    <div className={style.content}>
      {listLocationDataWeather.map(
        (item: LocationDataWeather, index: number) => (
          <Item
            key={item.id}
            index={index}
            {...item}
            removeLocation={removeLocation}
            fetchUpdateLocationData={fetchUpdateLocationData}
            clearLocationValue={clearLocationValue}
            dispatch={dispatch}
          />
        )
      )}
    </div>
  );
};

export default List;
