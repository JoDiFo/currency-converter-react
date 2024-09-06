import arrows from "../assets/arrows.png";
import { SelectCurrency, RateInformation, Input } from "../components";
import { Results } from "../containers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useCallback, useState } from "react";
import { IConvertResponseData } from "../Types";
import { clearData, setData } from "../redux/conversionSlice";
import {
  setAmount,
  setFrom,
  setTo,
  swapCurrencies,
} from "../redux/currenciesSlice";
import { useTranslation } from "react-i18next";

function Converter() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  const { convertPair, amount } = useSelector(
    (state: RootState) => state.currenciesReducer
  );

  const handleConvert = async () => {
    const url = `https://v6.exchangerate-api.com/v6/b9a59150bb14d420c71e9883/pair/${convertPair.from}/${convertPair.to}/${amount}`;

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

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setAmount(Number(e.target.value)));
    },
    [dispatch]
  );

  const handleFromChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value.split(",");
      dispatch(setFrom(newValue[0]));
    },
    [dispatch]
  );

  const handleToChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value.split(",");
      dispatch(setTo(newValue[0]));
    },
    [dispatch]
  );

  const handleSwap = () => {
    dispatch(swapCurrencies());
    dispatch(clearData());
    setIsLoading(true);
  };

  return (
    <div className="content show" data-child="convert">
      <form className="form">
        <div className="form-inputs">
          <div className="form-group">
            <label htmlFor="amount">{t("Amount Title")}</label>
            <Input placeholder="1.00" handleChange={handleInputChange} />
          </div>

          <div className="form-selects">
            <div className="form-select">
              <label htmlFor="from">{t("From Title")}</label>
              <SelectCurrency
                defaultValue={convertPair.from || t("Choose Currency")}
                handleChange={handleFromChange}
              />
            </div>

            <div
              className="form-select__icon switch-currencies"
              onClick={handleSwap}
            >
              <img src={arrows} alt="" />
            </div>

            <div className="form-select">
              <label htmlFor="from">{t("To Title")}</label>
              <SelectCurrency
                defaultValue={convertPair.to || t("Choose Currency")}
                handleChange={handleToChange}
              />
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
