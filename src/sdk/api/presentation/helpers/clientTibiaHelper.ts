export const unauthorizedClientTibia = (message: string, errorCode = 3) => {
  return {
    errorCode: errorCode,
    errorMessage: message,
  };
};

export const needTokenClientTibia = (message: string, errorCode = 6) => {
  return {
    errorCode: errorCode,
    errorMessage: message,
  };
};

export const needCodeEmailClientTibia = (message: string, errorCode = 8) => {
  return {
    errorCode: errorCode,
    errorMessage: message,
  };
};
