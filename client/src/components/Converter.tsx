import arrows from "../assets/arrows.png";
import { SelectForm, Results, RateInformation } from ".";

function Converter() {
  return (
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
            <SelectForm title={"From"} />

            <div className="form-select__icon switch-currencies">
              <img src={arrows} alt="" />
            </div>

            <SelectForm title={"To"} />
          </div>
        </div>

        <div className="form-info">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Results />

          <button type="submit" className="form-submit">
            Convert
          </button>
        </div>

        <RateInformation />
      </form>
    </div>
  );
}

export default Converter;
