import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ListItem } from ".";
import { useEffect, useState } from "react";
import { getFullTitle } from "../utils";

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
  }, [currenciesContext.convertPair.from]);

  return (
    <div className="currency-wrapper">
      <div className="currency-single">
        <div className="currency-single__item"></div>
      </div>

      <div className="currency-list">
        {currenciesContext.convertPair.from ? (
          <ListItem
            isBase={true}
            code={currenciesContext.convertPair.from}
            fullName={getFullTitle(
              currenciesContext.convertPair.from,
              currenciesContext.codeList
            )}
            rate={1}
          />
        ) : null}
        {currenciesContext.selected.length !== 0 && rates ? (
          currenciesContext.selected.map((item) => (
            <ListItem
              key={item[0] + item[1]}
              isBase={false}
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
