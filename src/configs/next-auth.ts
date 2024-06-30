import { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        emplid: { label: "EMPLID", type: "text", placeholder: "Enter EMPLID"},
        surname: { label: "Surname", type: "text", placeholder: "Enter Surname"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate credentials with your database here
        const user = {
          id: "1",
          name: "wang",
          email: "23881380",
          // image: "https://avatars.githubusercontent.com/u/80968727?v=4",
          classcode: "CSE 120",
          
        };

        console.log("==== Credentials ====")
        console.log(credentials)
        if (
          credentials?.username.toLowerCase() == user.name &&
          credentials.password.toLowerCase() == user.email
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET!,
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET!,
};
