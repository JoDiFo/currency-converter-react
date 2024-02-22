import arrows from "../assets/arrows.png";
import { SelectForm, Results, RateInformation, InputForm } from ".";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { IConvertResponseData } from "../Types";
import { setData } from "../redux/conversionSlice";

function Converter() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const currenciesContext = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  const handleConvert = async () => {
    const url =
      "http://localhost:5012/api/convert/" +
      new URLSearchParams({
        from: currenciesContext.convertPair.from,
        to: currenciesContext.convertPair.to,
        amount: currenciesContext.amount.toString(),
      });

    if (
      !currenciesContext.amount ||
      !currenciesContext.convertPair.from ||
      !currenciesContext.convertPair.to
    ) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data: IConvertResponseData = await response.json();

      if (data.result === "success") {
        dispatch(setData(data));
      }

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content show" data-child="convert">
      <form className="form">
        <div className="form-inputs">
          <InputForm title="Amount" />

          <div className="form-selects">
            <div className="form-select">
              <label htmlFor="from">From</label>
              <SelectForm title={"From"} />
            </div>

            <div className="form-select__icon switch-currencies">
              <img src={arrows} alt="" />
            </div>

            <div className="form-select">
              <label htmlFor="from">From</label>
              <SelectForm title={"To"} />
            </div>
          </div>
        </div>

        <div className="form-info">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>

          {!isLoading ? <Results /> : null}

          <button type="button" className="form-submit" onClick={handleConvert}>
            Convert
          </button>
        </div>

        {!isLoading ? <RateInformation /> : null}
      </form>
    </div>
  );
}

export default Converter;
