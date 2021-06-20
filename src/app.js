import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './api/routes'; //importing route

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

routes(app); //register the route


app.listen(port, () => console.log(`App listening on port ${port}`));