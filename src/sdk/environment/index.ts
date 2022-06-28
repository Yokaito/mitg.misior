const env = {
  twoFactorAuthentication: {
    enabled: process.env.TWO_FACTOR_ENABLED === `true`,
    key: process.env.TWO_FACTOR_KEY || ``,
    url: process.env.TWO_FACTOR_URL || ``,
  },
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || `http://localhost:3000`,
  },
  nextAuth: {
    secret: process.env.NEXTAUTH_SECRET || `guilherme`,
  },
};

export default env;
