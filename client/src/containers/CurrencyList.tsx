import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ListItem } from ".";
import { useCallback, useEffect, useState } from "react";
import { getFullTitle } from "../utils";
import { useTranslation } from "react-i18next";

function CurrencyList() {
  const { t } = useTranslation();

  const [rates, setRates] = useState();

  const currenciesContext = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  const fetchLatest = useCallback(async () => {
    const url = `https://v6.exchangerate-api.com/v6/b9a59150bb14d420c71e9883/latest/${currenciesContext.convertPair.from}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRates(data.conversion_rates);
    } catch (err) {
      console.log(err);
    }
  }, [currenciesContext.convertPair.from]);

  useEffect(() => {
    fetchLatest();
  }, [currenciesContext.convertPair.from, fetchLatest]);

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
          <h3>{t("None Selected")}</h3>
        )}
      </div>
    </div>
  );
}

export default CurrencyList;
