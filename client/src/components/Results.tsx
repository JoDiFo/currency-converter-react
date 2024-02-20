import equals from "../assets/equals.svg";

function Results() {
  return (
    <div className="form-results">
      <div className="form-result__item from" id="resultFrom"></div>

      <div className="form-result__equals">
        <img src={equals} alt="" />
      </div>

      <div className="form-result__item to" id="resultTo"></div>
    </div>
  );
}

export default Results;
