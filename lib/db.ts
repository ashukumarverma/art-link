import mongoose from "mongoose";

export async function connect() {
    try {
        const password = process.env.MONGO_PASSWORD as string;
        const uriTemplate = process.env.MONGO_URI as string;
        const dbUri = uriTemplate.replace('<password>', encodeURIComponent(password));

        await mongoose.connect(dbUri);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        });

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
    }
}
