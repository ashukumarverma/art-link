import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}
const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}
console.log("Prisma Client connected");
export default db;