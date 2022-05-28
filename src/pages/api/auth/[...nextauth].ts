import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import env from '@/environment';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: `Credentials`,
      credentials: {
        email: {
          label: `email`,
          type: `email`,
          placeholder: `...@mail.com`,
        },
        password: { label: `password`, type: `password` },
      },
      async authorize(credentials) {
        const res = await fetch(`${env.api.url}/api/login`, {
          method: `POST`,
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            'Content-Type': `application/json`,
          },
        });

        const user = await res.json();

        if (Object.hasOwn(user, `error`)) {
          return null;
        } else {
          return user;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      const isUserSignedIn = user ? true : false;

      if (isUserSignedIn) {
        token.id = user?.id;
        token.accessLevel = user?.access_level;
        token.coins = user?.coins;
        token.premiumDays = user?.premdays;
      }

      return Promise.resolve(token);
    },
    session: async ({ session, token }): Promise<any> => {
      const newSession = {
        user: {
          ...session.user,
          id: token?.id,
          coins: token?.coins,
        },
        auth: {
          premiumDays: token?.premiumDays,
          accessLevel: token?.accessLevel,
        },
        expires: session.expires,
      };

      return Promise.resolve(newSession);
    },
  },
  secret: env.nextAuth.secret,
  session: {
    strategy: `jwt`,
    maxAge: 168 * 60 * 60, // 1 week
  },
  theme: {
    colorScheme: `dark`,
  },
});
