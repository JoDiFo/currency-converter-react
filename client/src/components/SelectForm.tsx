import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { setFrom, setTo } from "../redux/currenciesSlice";

interface IProps {
  title: "From" | "To";
}

function SelectForm({ title }: IProps) {
  const dispatch = useDispatch();

  const currenciesContext = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  const defaultValue =
    (title === "From"
      ? currenciesContext.convertPair.from
      : currenciesContext.convertPair.to) || "Choose currency";
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value.split(",");
    setSelected(newValue[0]);
    switch (title) {
      case "From":
        dispatch(setFrom(newValue[0]));
        break;
      case "To":
        dispatch(setTo(newValue[0]));
        break;
    }
  };

  return (
    <select
      className="select"
      name="from"
      id="from"
      value={selected}
      required
      onChange={(e) => handleChange(e)}
    >
      <option key={1} value={defaultValue}>
        {defaultValue}
      </option>
      {currenciesContext.codeList.length !== 0
        ? currenciesContext.codeList.map((item) => (
            <option key={item[1] + item[0]} value={item}>
              {item[0]}
            </option>
          ))
        : null}
    </select>
  );
}

export default SelectForm;
