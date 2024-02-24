import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  Converter,
  LanguageSelector,
  NavBar,
  SingleCurrencies,
} from "./components";
import { setCodes } from "./redux/currenciesSlice";
import { useTranslation } from "react-i18next";

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const fetchCodes = () => {
    const url = "https://v6.exchangerate-api.com/v6/b9a59150bb14d420c71e9883/codes";

    fetch(url)
      .then((res) => res.json())
      .then((data: any) => dispatch(setCodes(data.supported_codes)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  return (
    <main>
      <LanguageSelector />
      <div className="container">
        <h1>{t("Title")}</h1>

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
