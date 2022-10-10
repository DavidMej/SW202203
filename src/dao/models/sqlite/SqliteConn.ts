import { open } from 'sqlite';
import sqlite from 'sqlite';

let connection = null;
export const getConnection = async (url?: string)=>{
  console.log(open);
  if (!connection) {
    const dbUrl = (url)? url: (process.env.DB_URI || 'Users.db');
    connection =  await open({
      filename: dbUrl,
      driver: sqlite.Database
    }
    );
  }
  return connection;
}