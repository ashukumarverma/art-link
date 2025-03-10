import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { LoginSchema } from "./schema";
import bcryptjs from "bcryptjs";
import { getUserByEmail } from "./data/user";
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedField = await LoginSchema.safeParse(credentials);

        if(!validatedField.success) {
          return null;
        }

        const { email, password } = validatedField.data;

        const user = await getUserByEmail(email);

        if(!user || !user.password) {
          return null;
        }

        const passwordMatch = await bcryptjs.compare(password, user.password);
        if (passwordMatch) {
          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
