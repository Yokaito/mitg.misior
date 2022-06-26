export const unauthorizedClientTibia = (
  message: string,
  errorCode = 3,
  body?: any,
) => {
  return {
    errorCode: errorCode,
    errorMessage: message,
    body,
  };
};
