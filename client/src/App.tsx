import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Converter, NavBar, SingleCurrencies } from "./components";
import { setCodes } from "./redux/currenciesSlice";

function App() {
  const dispatch = useDispatch();

  const fetchCodes = () => {
    fetch("https://v6.exchangerate-api.com/v6/b9a59150bb14d420c71e9883/codes")
      .then((res) => res.json())
      .then((data: any) => dispatch(setCodes(data.supported_codes)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Check live foreign currency exchange rates</h1>

        <div className="main">
          <div className="wrapper">
            <NavBar />

            <Routes>
              <Route path="/" element={<Converter />} />
              <Route path="/currencies" element={<SingleCurrencies />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
