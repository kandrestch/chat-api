import "reflect-metadata";
import dotenv from 'dotenv';
dotenv.config();
import {AppDataSource} from './config/data-source';
import server from './app';

const PORT = process.env.PORT || 3000;

async function main(){
    try{
        AppDataSource.initialize();
        server.listen(PORT,()=>{
            console.log(`Server is running at: \x1b[4mhttp://localhost:${PORT}\x1b[0m`);
        });
    }catch(error){
        console.error(error)
    }
}
main();