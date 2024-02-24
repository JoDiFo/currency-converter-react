import arrows from "../assets/arrows.png";
import { SelectForm, Results, RateInformation, InputForm } from ".";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { IConvertResponseData } from "../Types";
import { clearData, setData } from "../redux/conversionSlice";
import { swapCurrencies } from "../redux/currenciesSlice";
import { useTranslation } from "react-i18next";

function Converter() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  const { convertPair, amount } = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  const handleConvert = async () => {
    const url =
      "http://localhost:5012/api/convert/" +
      new URLSearchParams({
        from: convertPair.from,
        to: convertPair.to,
        amount: amount.toString(),
      });

    if (!amount || !convertPair.from || !convertPair.to) {
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
          <InputForm title={t("Amount Title")} />

          <div className="form-selects">
            <div className="form-select">
              <label htmlFor="from">{t("From Title")}</label>
              <SelectForm title={"From"} />
            </div>

            <div
              className="form-select__icon switch-currencies"
              onClick={() => {
                dispatch(swapCurrencies());
                dispatch(clearData());
                setIsLoading(true);
              }}
            >
              <img src={arrows} alt="" />
            </div>

            <div className="form-select">
              <label htmlFor="from">{t("To Title")}</label>
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
            {t("Convert Button")}
          </button>
        </div>

        {!isLoading ? <RateInformation /> : null}
      </form>
    </div>
  );
}

export default Converter;
