import nextAuth, { NextAuth } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
            label: 'Email',
            type: 'email',
            placeholder: 'hello@example.com'
        },
        password: {
            label: 'password',
            type: 'password',
            placeholder: '*******'
        }
      },
      async authorize(credentials) {
        

      }
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
