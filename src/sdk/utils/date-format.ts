import { misiorWeb } from '@/misior';

export const dateFormatNewsticker = (date: Date, locale = `ptBr`): string => {
  const baseDate = new Date(date);
  const localeSplit = `${locale.slice(0, 2)}-${locale.slice(
    2,
    4,
  )}`.toLowerCase();

  const month = baseDate.toLocaleString(localeSplit, {
    month: `short`,
    timeZone: misiorWeb.timezone,
  });
  const day = baseDate.getDate();
  const year = baseDate.getFullYear();
  const hour = baseDate.getHours();
  const minute = baseDate.getMinutes();

  return `${month} ${day} ${year} - ${hour}:${minute}`;
};

export const convertToUnixTime = (date: string) => {
  return Math.round(new Date(date).getTime() / 1000);
};
