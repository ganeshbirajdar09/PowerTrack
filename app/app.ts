import express from 'express';
import { connectToMongo } from './connections/mongo.connection';
import { registerRoutes } from './routes/routes';

export const startServer = async () => {
    try {
        const app = express();

        await connectToMongo();

        registerRoutes(app)

        const { PORT } = process.env;
        app.listen(
            PORT || 5000,
            () => console.log(`SERVER STARTED ON PORT: ${PORT || 5000}`)
        );
    } catch (e) {
        console.log('COULD NOT START SERVER', e);
        process.exit(1);
    }
}