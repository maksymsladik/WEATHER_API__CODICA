import React from "react";
import { ItemSelectProps } from "../../../../../../interfaces";

const Item: React.FC<ItemSelectProps> = ({ day }) => {
  return <option value={day}>{day}</option>;
};

export default Item;
