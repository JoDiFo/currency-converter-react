import { useDispatch } from "react-redux";
import { removeCurrency } from "../redux/currenciesSlice";
import { useEffect, useState } from "react";
import { SelectForm } from ".";
import {useTranslation} from 'react-i18next'

interface IProps {
  isBase: boolean;
  code: string;
  fullName: string;
  rate: number;
}

function ListItem({ isBase, code, fullName, rate }: IProps) {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const action = isBase ? t("Change") : t("Remove");

  const [showSelect, setShowSelect] = useState(false);

  const handleAction = (code: string) => {
    if (action == "change") {
      setShowSelect(true);
    } else {
      dispatch(removeCurrency(code));
    }
  };

  useEffect(() => {
    setShowSelect(false)
  }, [code])

  return (
    <div
      className={`currency-item ${isBase ? "currency-current" : ""}`}
      data-item={code}
    >
      <div className="currency-titles">
        <div className="currency-title">{code}</div>
        <div className="currency-full">{fullName}</div>
      </div>

      <div className="currency-amount">{rate.toFixed(2)}</div>
      <div className="currency-action">
        {showSelect ? (
          <SelectForm title="From" />
        ) : (
          <button
            className={`currency-${action} currency-button`}
            onClick={() => handleAction(code)}
          >
            {action}
          </button>
        )}
      </div>
    </div>
  );
}

export default ListItem;
