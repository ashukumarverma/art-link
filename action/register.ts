import clientPromise from "@/lib/db"

export const register = async () => {
    const client = await clientPromise
    const db = client.db("ArtLink_DB1");
    const user = await db.collection("users").insertOne({
        email: "kartik@gmail.com",
        password: "kartik",
    })
}