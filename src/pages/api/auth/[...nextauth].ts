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
        const user = { id: 1, name: `J Smith`, email: `jsmith@example.com` };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: env.nextAuth.secret,
  session: {
    strategy: `jwt`,
    maxAge: 168 * 60 * 60, // 1 week
  },
  theme: {
    colorScheme: `dark`,
  },
});
