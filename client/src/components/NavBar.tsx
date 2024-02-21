import { Link } from "react-router-dom";
import convert from "../assets/convert.svg";
import single from "../assets/single.svg";
import { useState } from "react";

function NavBar() {
  const [isConvert, setIsConvert] = useState(true);
  const [isSingle, setIsSingle] = useState(false);

  const handleConvertClick = () => {
    setIsConvert(true);
    setIsSingle(false);
  };

  const handleSingleClick = () => {
    setIsConvert(false);
    setIsSingle(true);
  };

  return (
    <div className="tabs">
      <Link to="/" onClick={handleConvertClick}>
        <div className={`tab${isConvert ? " active" : ""}`} data-tab="convert">
          <div className="tab-icon">
            <img src={convert} alt="" />
          </div>
          <div className="tab-title">Convert</div>
        </div>
      </Link>

      <Link to="/currencies" onClick={handleSingleClick}>
        <div className={`tab${isSingle ? " active" : ""}`} data-tab="single">
          <div className="tab-icon">
            <img src={single} alt="" />
          </div>
          <div className="tab-title">Single</div>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
