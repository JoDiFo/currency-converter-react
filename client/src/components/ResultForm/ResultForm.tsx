import arrow from "../../assets/arrow.svg";

interface IProps {
  targetCode: string;
  currencyTitle: string;
  amount: number;
  target: "from" | "to"
}

function ResultForm({ targetCode, currencyTitle, amount, target }: IProps) {
  return (
    <div className={`form-result__item ${target}`}>
      <div className="form-result__item-icon icon">
        <img src={arrow} alt="arrow" />
      </div>

      <div className="form-result__item-titles">
        <div className="form-result__item-title">{targetCode}</div>
        <div className="form-result__item-full">{currencyTitle}</div>
      </div>

      <div className="form-result__item-value">{amount.toFixed(2)}</div>
    </div>
  );
}

export default ResultForm;
