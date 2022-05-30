import ptBr from './pt-br';
import enUs from './en-us';

export type LangStringProps = {
  [key: string]: LangOptionsProps;
};

type LangOptionsProps = {
  [key: string]: string;
};

export const LangStrings: LangStringProps = {
  enUs: enUs,
  ptBr: ptBr,
};
