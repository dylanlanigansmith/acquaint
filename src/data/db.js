import { Pool } from 'pg';


const pool = new Pool({
  host: 'localhost',
  user: 'postlive',
  password: 'irony',
  database: 'postlive',
  port: 5432,
  ssl: false, 
});


export async function query(text, params) {
  const res = await pool.query(text, params);
  return res;
}
