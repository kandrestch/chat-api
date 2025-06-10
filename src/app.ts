import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

const app=express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Static files
app.use(express.static('public'));

// Cors configuration
app.use(cors(
    {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Range', 'Accept', 'X-Requested-With'],
        exposedHeaders: ['Content-Range', 'Accept-Ranges', 'Content-Length', 'Content-Type'],
        credentials: true
    }
));

// routes
app.use('/api',routes);

export default app;