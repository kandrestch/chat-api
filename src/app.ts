import express from 'express';
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import {Server} from 'socket.io'
import {createServer} from 'node:http'
import { authRedirectMiddleware } from './middlewares/auth.middleware';

const app=express();
const server=createServer(app)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors(
    {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Range', 'Accept', 'X-Requested-With'],
        exposedHeaders: ['Content-Range', 'Accept-Ranges', 'Content-Length', 'Content-Type'],
        credentials: true
    }
));

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

const io=new Server(server,{
    cors: { origin: "http://localhost:4200", methods: ["GET", "POST"]}
})
io.on('connection',(socket)=>{
    console.log("a user connected")
    
    socket.on('private-chat',(data)=>{
        io.emit('private-chat',data);
    })
    socket.on('group-chat',(data)=>{
        io.emit('group-chat',data);
    })

    socket.on('disconnect',()=>{
        console.log("a user disconnected")
    })
})


// routes
app.use('/api',routes);
//views
app.get('/',authRedirectMiddleware,(req,res)=>{
    res.render("chats")
})
app.get('/chat/:username',authRedirectMiddleware,(req,res)=>{
    const receiver_username = req.params.username;
    res.render("private-chat", { receiver_username })
})
app.get('/group/:name',authRedirectMiddleware,(req,res)=>{
    const chat_name = req.params.name;
    res.render("group-chat", { chat_name })
})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.get('/register',(req,res)=>{
    res.render("register")
})
export default server;