import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ListItem } from ".";
import { useEffect, useState } from "react";

function CurrencyList() {
  const [rates, setRates] = useState();

  const currenciesContext = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  const fetchLatest = async () => {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/b9a59150bb14d420c71e9883/latest/${currenciesContext.convertPair.from}`
      );
      const data = await response.json();
      setRates(data.conversion_rates);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  return (
    <div className="currency-wrapper">
      <div className="currency-single">
        <div className="currency-single__item"></div>
      </div>

      <div className="currency-list">
        {(currenciesContext.selected.length !== 0 && rates) ? (
          currenciesContext.selected.map((item) => (
            <ListItem
              key={item[0] + item[1]}
              isBase={item[0] == currenciesContext.convertPair.from}
              code={item[0]}
              fullName={item[1]}
              rate={rates[item[0]]}
            />
          ))
        ) : (
          <h3>No Currencies Selected</h3>
        )}
      </div>
    </div>
  );
}

export default CurrencyList;
