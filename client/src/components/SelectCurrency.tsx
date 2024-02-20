function SelectCurrency() {
  return (
    <div className="currency-add">
      <button className="currency-add__button">Add currency</button>

      <select className="select" id="addCurrencySelect">
        <option value="" disabled selected hidden>
          Choose currency
        </option>
      </select>
    </div>
  );
}

export default SelectCurrency;
