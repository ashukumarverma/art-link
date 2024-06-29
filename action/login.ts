// import { connect } from "@/lib/db";
import { LoginSchema } from "@/schema";
import { z } from "zod";

// connect();

export const login = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
}