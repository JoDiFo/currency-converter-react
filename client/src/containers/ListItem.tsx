import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { removeCurrency, setFrom } from "../redux/currenciesSlice";
import { useCallback, useEffect, useRef, useState } from "react";
import { SelectCurrency } from "../components";
import { useTranslation } from "react-i18next";

interface IProps {
  isBase: boolean;
  code: string;
  fullName: string;
  rate: number;
}

function ListItem({ isBase, code, fullName, rate }: IProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const action = isBase ? "change" : "remove";

  const nodeRef = useRef(null);

  const [showSelect, setShowSelect] = useState(false);

  const handleAction = (code: string) => {
    if (action == "change") {
      setShowSelect(true);
    } else {
      dispatch(removeCurrency(code));
    }
  };

  useEffect(() => {
    setShowSelect(false);
  }, [code]);

  const handleFromChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value.split(",");
      dispatch(setFrom(newValue[0]));
    },
    [dispatch]
  );

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={false}
        timeout={200}
        className="currency-item"
      >
        <div
          className={`currency-item ${isBase ? "currency-current" : ""}`}
          data-item={code}
          ref={nodeRef}
        >
          <div className="currency-titles">
            <div className="currency-title">{code}</div>
            <div className="currency-full">{fullName}</div>
          </div>

          <div className="currency-amount">{rate.toFixed(2)}</div>
          <div className="currency-action">
            {showSelect ? (
              <SelectCurrency
                defaultValue={t("Choose Currency")}
                handleChange={handleFromChange}
              />
            ) : (
              <button
                className={`currency-${action} currency-button`}
                onClick={() => handleAction(code)}
              >
                {t(action)}
              </button>
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default ListItem;
