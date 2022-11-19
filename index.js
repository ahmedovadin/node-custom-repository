import {config} from 'dotenv';
config();

import express from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';
import {ArticleController} from './controllers/index.js';


const app = express();

app.use(express.json());

app.get([
    '/articles/:amount',
    '/articles/:keyword',
    '/articles/:amount/:keyword',
    '/articles/',
], ArticleController.getNews);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log('Server started');
});


