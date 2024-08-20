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

export async function user_query(querystr, params) {
  let res = await query(querystr) //where userid=";DROP TABLE users;

  if(res == null || !res) return null;
  
  if(res.rowCount == 0) return null;
  let user = res.rows[0]
  return user;
}