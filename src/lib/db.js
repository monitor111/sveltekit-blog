import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const url = new URL(connectionString);

export const pool = mysql.createPool({
  host: url.hostname,
  user: url.username,
  password: url.password,
  database: url.pathname.slice(1),
  port: url.port ? Number(url.port) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
