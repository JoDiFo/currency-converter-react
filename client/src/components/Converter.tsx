import arrows from "../assets/arrows.png";
import { SelectForm, Results, RateInformation, InputForm } from ".";

function Converter() {
  return (
    <div className="content show" data-child="convert">
      <form className="form">
        <div className="form-inputs">
          <InputForm title="Amount" />

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
