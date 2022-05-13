const env = {
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || `http://localhost:3000`,
  },
  nextAuth: {
    secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET || `guilherme`,
  },
};

export default env;
