/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FC, useEffect, useState } from 'react';
import { LangStrings, LangStringProps } from '@/sdk/content/language';

export const defaultLocale = `ptBr`;
export const locales = [`ptBr`, `enUs`];

type LanguageContextProps = {
  locale: string;
  setLocale: (locale: string) => void;
  langs: LangStringProps;
};

export const LanguageContext = createContext<LanguageContextProps>({
  langs: LangStrings,
  locale: defaultLocale,
  setLocale: (): any => {
    return;
  },
});

export const LanguageProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const [langs] = useState(LangStrings);

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem(`language`) || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, langs }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
