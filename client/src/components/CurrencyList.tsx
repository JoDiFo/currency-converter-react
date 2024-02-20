function CurrencyList() {
  return (
    <div className="currency-wrapper">
      <div className="currency-single">
        <select className="select" id="singleSelect">
          <option value="" disabled selected hidden>
            Choose currency
          </option>
        </select>

        <div className="currency-single__item"></div>
      </div>

      <div className="currency-list"></div>
    </div>
  );
}

export default CurrencyList;
