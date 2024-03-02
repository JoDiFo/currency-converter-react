import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Title: "Check live foreign currency exchange rates",
      "Convert Tab": "Convert",
      "Single Tab": "Single",
      "Amount Title": "Amount",
      "From Title": "From",
      "To Title": "To",
      "Convert Button": "Convert",
      "None Selected": "No Currencies Selected",
      "Add Currency Button": "Add currency",
      "Choose Currency": "Choose currency",
      "Last Updated": "Last updated",
      Change: "change",
      Remove: "remove",
    },
  },
  ru: {
    translation: {
      Title: "Конвертируй с использованием текущего курса инностранных валют",
      "Convert Tab": "Перевести",
      "Single Tab": "Одна валюта",
      "Amount Title": "Сумма",
      "From Title": "Главная валюта",
      "To Title": "Валюта для перевода",
      "Convert Button": "Конвертировать",
      "None Selected": "Не выбрано ни одной валюты",
      "Add Currency Button": "Добавить валюту",
      "Choose Currency": "Выберите вылюту",
      "Last Updated": "Последнее обновление",
      Change: "изменить",
      Remove: "удалить",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
