import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addCurrency } from "../redux/currenciesSlice";

function SelectCurrency() {
  const dispatch = useDispatch();
  const defaultValue = "Select currency";
  const [showSelect, setShowSelect] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const currenciesContext = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  const handleAddClick = () => {
    setShowSelect(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value.split(",");
    setSelected(newValue[0]);
    setShowSelect(false);
    dispatch(addCurrency(newValue))
  };

  return (
    <div className="currency-add">
      <button className="currency-add__button" onClick={handleAddClick}>
        Add currency
      </button>

      {showSelect ? (
        <select
          className="select"
          value={selected}
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
      ) : null}
    </div>
  );
}

export default SelectCurrency;
