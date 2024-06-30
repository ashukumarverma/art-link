import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schema";
import bcryptjs from "bcryptjs";
import { getUserByEmail } from "./data/user";
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
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
