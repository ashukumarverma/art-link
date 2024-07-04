"use server";

import * as z from "zod";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { signIn, auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default async function login(values: z.infer<typeof LoginSchema>) {
  try {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid Fields!" };
    }

  const { email, password } = validatedFields.data;
  console.log("Login action1")
  const existUser = await getUserByEmail(email);
  if (!existUser || !existUser.email || !existUser.password) {
    return { error: "User not found!" };
  }

  // if (!existUser.emailVerified) {
  //   const verificationToken = await generateVerifiacationToken(existUser.email);
  //   return { success: "Email not verified. Confirmation email sent!" };
  // }
  console.log("Login action2")
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    const session = await auth()
    console.log("session", session)
    return { success: "Logged in successfull." };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credential!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}
