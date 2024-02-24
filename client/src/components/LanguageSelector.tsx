import { useEffect, useState } from "react";
import "../LanguageSelector.css";
import i18next from "i18next";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <select
      className="languageSelect"
      name="language"
      id="languageSelect"
      onChange={(e) => handleChange(e)}
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
}

export default LanguageSelector;
