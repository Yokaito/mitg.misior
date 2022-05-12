export type LangStringProps = {
  [key: string]: LangOptionsProps;
};

type LangOptionsProps = {
  [key: string]: string;
};

export const LangStrings: LangStringProps = {
  enUs: {
    'home/template': `Home Page`,
  },
  ptBr: {
    'home/template': `Pagina Inicial`,
  },
};
