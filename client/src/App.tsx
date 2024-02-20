import equals from "./assets/equals.svg";
import convert from "./assets/convert.svg";
import single from "./assets/single.svg";
import arrow from "./assets/arrow.svg";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Check live foreign currency exchange rates</h1>

          <div className="main">
            <div className="wrapper">
              <div className="tabs">
                <div className="tab active" data-tab="convert">
                  <div className="tab-icon">
                    <img src={convert} alt="" />
                  </div>
                  <div className="tab-title">Convert</div>
                </div>

                <div className="tab" data-tab="single">
                  <div className="tab-icon">
                    <img src={single} alt="" />
                  </div>
                  <div className="tab-title">Single</div>
                </div>
              </div>

              <div className="content show" data-child="convert">
                <form className="form">
                  <div className="form-inputs">
                    <div className="form-group">
                      <label htmlFor="amount">Amount</label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        required
                        placeholder="1.00"
                      />
                    </div>

                    <div className="form-selects">
                      <div className="form-select">
                        <label htmlFor="from">From</label>
                        <select
                          className="select"
                          name="from"
                          id="from"
                          required
                        >
                          <option value="" disabled selected hidden>
                            Choose currency
                          </option>
                        </select>
                      </div>

                      <div className="form-select__icon switch-currencies">
                        <img src={arrow} alt="" />
                      </div>

                      <div className="form-select">
                        <label htmlFor="to">To</label>
                        <select className="select" name="to" id="to" required>
                          <option value="" disabled selected hidden>
                            Choose currency
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-info">
                    <div className="loader">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="form-results">
                      <div
                        className="form-result__item from"
                        id="resultFrom"
                      ></div>

                      <div className="form-result__equals">
                        <img src={equals} alt="" />
                      </div>

                      <div className="form-result__item to" id="resultTo"></div>
                    </div>

                    <button type="submit" className="form-submit">
                      Convert
                    </button>
                  </div>

                  <div className="rate-information">
                    <div className="rate-conversion"></div>
                    <div className="rate-last"></div>
                  </div>
                </form>
              </div>

              <div className="content" data-child="single">
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

                <div className="currency-add">
                  <button className="currency-add__button">Add currency</button>

                  <select className="select" id="addCurrencySelect">
                    <option value="" disabled selected hidden>
                      Choose currency
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
