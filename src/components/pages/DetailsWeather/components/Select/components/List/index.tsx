import Item from "../Item";
import { ListSelectProps } from "../../../../../../interfaces";

const List: Function = ({ dataDays }: ListSelectProps): JSX.Element[] => {
  return dataDays.map((day) => <Item key={day} day={day} />);
};

export default List;
