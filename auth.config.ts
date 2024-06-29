import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schema";

export default {
    providers: [
        // Credentials({
        //     authorize: async (credentials) => {

        //         const validatedField = LoginSchema.safeParse(credentials);

        //         if (!validatedField.success) {
        //           return null;
        //         }

        //         let user = null
        //         // logic to salt and hash password
        //         const pwHash = saltAndHashPassword(credentials.password)
         
        //         // logic to verify if user exists
        //         user = await getUserFromDb(credentials.email, pwHash)
         
        //         if (!user) {
        //           // No user found, so this is their first attempt to login
        //           // meaning this is also the place you could do registration
        //           throw new Error("User not found.")
        //         }
         
        //         // return user object with the their profile data
        //         return user
        //       },
        // })
    ]
} satisfies NextAuthConfig