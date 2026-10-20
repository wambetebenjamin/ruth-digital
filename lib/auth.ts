import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

/**
 * Google OAuth for client account areas.
 * NEXTAUTH_SECRET, NEXTAUTH_URL, GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are
 * read from the environment. Only the client id is ever sent to the browser by
 * the provider redirect.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
});
