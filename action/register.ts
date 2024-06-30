"use server"
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import db from "@/lib/db";
import { RegisterSchema } from "@/schema"
import { z } from "zod"

export default async function register(values: z.infer<typeof RegisterSchema>) {
    try {
        console.log("Register action")
        const validatedField = RegisterSchema.safeParse(values);
        if(!validatedField.success) {
            return {error: "Invalid field inputs!"};
        }
        const { email, password, name } = validatedField.data;

        const existUser = await getUserByEmail(email)
        if(existUser) {
            return {error: "User already exists!"};
        }

        // const hashedPassword = await bcrypt.hash(password, 12);
        // Do something with the data
        const user = await db.user.create({
            data: {
                email,
                password,
                name
            }
        })
        return {success: "User created successfully"};
    } catch (error) {
        return {error: "Something went wrong. Please try again later."}
    }
}