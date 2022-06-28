export const removeHttp = (url: string): string => {
  return url.replace(/^https?:\/\//, ``);
};
