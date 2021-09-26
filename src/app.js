import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './api/routes'; //importing route

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const token = process.env.TOKEN_SECRET;

//middlewares
const corsOptions = {
  origin: [/\.eduardochiaro\.com$/, 'http://localhost:3000'],
  methods: ['POST', 'GET', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());

routes(app); //register the route

app.listen(port, () => console.log(`App listening on port ${port}`));