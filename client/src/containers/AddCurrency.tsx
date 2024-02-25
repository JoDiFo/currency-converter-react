import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrency } from "../redux/currenciesSlice";
import { useTranslation } from "react-i18next";
import { SelectCurrency } from "../components";

function AddCurrency() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [showSelect, setShowSelect] = useState(false);

  const handleAddClick = () => {
    setShowSelect(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value.split(",");
    setShowSelect(false);
    dispatch(addCurrency(newValue));
  };

  return (
    <div className="currency-add">
      <button className="currency-add__button" onClick={handleAddClick}>
        {t("Add Currency Button")}
      </button>

      {showSelect ? (
        <SelectCurrency
          defaultValue={t("Choose Currency")}
          handleChange={handleChange}
        />
      ) : null}
    </div>
  );
}

export default AddCurrency;
