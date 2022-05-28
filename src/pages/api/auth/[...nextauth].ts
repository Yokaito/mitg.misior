import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import env from '@/environment';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: `Credentials`,
      credentials: {
        username: { label: `Username`, type: `text`, placeholder: `jsmith` },
        password: { label: `Password`, type: `password` },
      },
      async authorize(credentials, req) {
        const user = {
          id: 1,
          name: `Guilherme Fontes`,
          email: `gui.fontes.amorim@example.com`,
          accessLevel: `4`,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      const isUserSignedIn = user ? true : false;

      if (isUserSignedIn) {
        token.id = user?.id;
        token.accessLevel = user?.accessLevel;
      }

      return Promise.resolve(token);
    },
    session: async ({ session, token }): Promise<any> => {
      const newSession = {
        user: {
          ...session.user,
          id: token.id,
        },
        auth: {
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
