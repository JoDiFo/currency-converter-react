import { CurrencyList, SelectCurrency } from ".";

function Single() {
  return (
    <div className="content" data-child="single">
      <CurrencyList />
      <SelectCurrency />
    </div>
  );
}

export default Single;
