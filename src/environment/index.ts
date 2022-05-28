const env = {
  bcrypt: {
    salt: Number(process.env.NEXT_PUBLIC_BCRYPT_SALT) || 10,
  },
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || `http://localhost:3000`,
  },
  nextAuth: {
    secret: process.env.NEXTAUTH_SECRET || `guilherme`,
  },
};

export default env;
