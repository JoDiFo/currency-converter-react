import convert from "../assets/convert.svg";
import single from "../assets/single.svg";

function NavBar() {
  return (
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
  );
}

export default NavBar;
