import { useSelector } from "react-redux";
import equals from "../assets/equals.svg";
import { RootState } from "../redux/store";
import { ResultForm } from ".";
import { getFullTitle } from "../utils";

function Results() {
  const conversionContext = useSelector(
    (state: RootState) => state.conversionReducer
  );

  const currenciesContext = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  return (
    <div className="form-results">
      <ResultForm
        targetCode={conversionContext.base_code}
        currencyTitle={getFullTitle(
          currenciesContext.convertPair.from,
          currenciesContext.codeList
        )}
        amount={currenciesContext.amount}
        target="from"
      />

      <div className="form-result__equals">
        <img src={equals} alt="" />
      </div>

      <ResultForm
        targetCode={conversionContext.target_code}
        currencyTitle={getFullTitle(
          currenciesContext.convertPair.to,
          currenciesContext.codeList
        )}
        amount={conversionContext.conversion_result}
        target="to"
      />
    </div>
  );
}

export default Results;
