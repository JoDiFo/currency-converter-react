import { CurrencyList, AddCurrency } from "../containers";

function Single() {
  return (
    <div className="content" data-child="single">
      <CurrencyList />
      <AddCurrency />
    </div>
  );
}

export default Single;
