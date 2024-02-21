import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ListItem } from ".";

function CurrencyList() {
  const currenciesContext = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  return (
    <div className="currency-wrapper">
      <div className="currency-single">
        <div className="currency-single__item"></div>
      </div>

      <div className="currency-list">
        {currenciesContext.selected.map((item) => (
          <ListItem
            key={item[0] + item[1]}
            isBase={false}
            code={item[0]}
            fullName={item[1]}
            rate={0}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrencyList;
