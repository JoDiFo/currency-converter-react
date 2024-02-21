import { Link, useLocation } from "react-router-dom";
import convert from "../assets/convert.svg";
import single from "../assets/single.svg";
import { useEffect, useState } from "react";

function NavBar() {
  const [isConvert, setIsConvert] = useState(false);
  const [isSingle, setIsSingle] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setIsConvert(true);
      setIsSingle(false);
    } else {
      setIsConvert(false);
      setIsSingle(true);
    }
  }, [pathname]);

  return (
    <div className="tabs">
      <Link to="/">
        <div className={`tab${isConvert ? " active" : ""}`} data-tab="convert">
          <div className="tab-icon">
            <img src={convert} alt="" />
          </div>
          <div className="tab-title">Convert</div>
        </div>
      </Link>

      <Link to="/currencies">
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
