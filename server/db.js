const mysql=require('mysql2/promise');
const pool=mysql.createPool({host:process.env.DB_HOST||'mysql-37610bae-jeromequijano17-df99.l.aivencloud.com',port:Number(process.env.DB_PORT||23687),user:process.env.DB_USER||'jeromequijano',password:process.env.DB_PASSWORD||'AVNS_Qd6zdoKt3mtXSDLyrRg',database:process.env.DB_NAME||'dama_game',connectionLimit:10});
module.exports={pool,query:(sql,p)=>pool.execute(sql,p)};
