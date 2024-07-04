import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import db from "./lib/db";
import NextAuth, { type DefaultSession } from "next-auth";
import { UserType } from "@prisma/client";
import { JWT } from "next-auth/jwt";
import { getUserByID } from "./data/user";

declare module "next-auth/jwt" {
  interface JWT {
    userType: UserType;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      userType: UserType;
    } & DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }

      // const existUser = await getUserById(user.id as string);
      // //prevent login if email is not verified
      // if (!existUser?.emailVerified) {
      //   return false;
      // }
      // //Todo: Add 2FA verification

      return true;
    },
    async session({ token, session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          userType: token.userType,
        },
      };
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }
      const existUser = await getUserByID(token.sub);
      if (!existUser || !existUser.userType) {
        return token;
      }
      token.userType = existUser.userType;
      return {
        ...token,
        userType: token.userType,
      };
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
