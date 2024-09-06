import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { LanguageSelector, NavBar } from "./components";
import { Converter, SingleCurrencies } from "./pages";
import { setCodes } from "./redux/currenciesSlice";
import { useTranslation } from "react-i18next";
import { ISupportedCodes } from "./Types";

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const fetchCodes = useCallback(() => {
    const url =
      "https://v6.exchangerate-api.com/v6/b9a59150bb14d420c71e9883/codes";

    fetch(url)
      .then((res) => res.json())
      .then((data: ISupportedCodes) => dispatch(setCodes(data.supported_codes)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    fetchCodes();
  }, [fetchCodes]);

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
