import {
  defaultLocale,
  LanguageContext,
  locales,
} from '@/sdk/contexts/LanguageContext';
import { useContext } from 'react';

export const useTranslation = () => {
  const { locale, setLocale, langs } = useContext(LanguageContext);

  const t = (key: string) => {
    if (!langs[locale][key]) {
      console.warn(`Translation key "${key}" not found for locale "${locale}"`);
    }

    return langs[locale][key] || langs[defaultLocale][key] || ``;
  };

  const changeLanguage = (language: string) => {
    if (locales.includes(language)) {
      localStorage.setItem(`language`, language);
      setLocale(language);
    } else {
      console.warn(`Language "${language}" not found`);
    }
  };

  return { t, locale, changeLanguage, locales };
};

export default useTranslation;
