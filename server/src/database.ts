import mysql from 'promise-mysql';
import keys from "./keys";

const poll= mysql.createPool(keys.database);

poll.then((r:any)=> r.getConnection()
    .then((r: any)=>{
        r.release();
        console.log('Database connected');
    }));
export default poll;