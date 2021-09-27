import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './api/routes'; //importing route

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const token = process.env.TOKEN_SECRET;
const origin = process.env.NODE_ENV == 'production' ? [/eduardochiaro\.com$/] : '*';

//middlewares
const corsOptions = {
  origin,
  methods: ['POST', 'GET', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app); //register the route

app.listen(port, () => console.log(`Server in ${process.env.NODE_ENV} on port ${port}`));