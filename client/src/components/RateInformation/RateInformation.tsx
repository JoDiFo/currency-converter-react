import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatToCurrency } from "../../utils";
import { useTranslation } from "react-i18next";

function RateInformation() {
  const { t } = useTranslation();
  const conversionContext = useSelector(
    (state: RootState) => state.conversionReducer
  );

  const innerText = `${formatToCurrency(
    conversionContext.base_code,
    1
  )} = ${formatToCurrency(
    conversionContext.target_code,
    conversionContext.conversion_rate
  )}`;

  return (
    <div className="rate-information">
      <div className="rate-conversion">{innerText}</div>
      <div className="rate-last">
        {t("Last updated")} {conversionContext.time_last_update_utc}
      </div>
    </div>
  );
}

export default RateInformation;
