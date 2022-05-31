import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: `/`,
    error: `/`,
  },
  callbacks: {
    authorized: ({ token }) => {
      if (token) {
        return false;
      }
      return true;
    },
  },
});
