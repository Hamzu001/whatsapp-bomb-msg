import express from 'express'
import msgRouter from './routes.js'

const app = express();

app.use(express.json());

app.use("/api/v1/whatsapp", msgRouter);

export { app };
