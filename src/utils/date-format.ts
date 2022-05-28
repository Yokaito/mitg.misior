export const dateFormatNewsticker = (date: Date): string => {
  const baseDate = new Date(date);

  const month = baseDate.toLocaleString(`default`, { month: `long` });
  const day = baseDate.getDate();
  const year = baseDate.getFullYear();
  const hour = baseDate.getHours();
  const minute = baseDate.getMinutes();

  const dateFormat = `${month} ${day} ${year} - ${hour}:${minute}`;

  return dateFormat;
};
