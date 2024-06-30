import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import db from "./lib/db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  // pages: {
  //   signIn: "/auth/login",
  //   error: "/auth/error",
  // },
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
    async session({token, session}){
      return session
    },
    async jwt({token}){
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})