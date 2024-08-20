import { query } from "@/data/db";


export async function get_user_by_id(userid){
    let res = await query(`SELECT * FROM users WHERE userid = '${userid}'`)
    if(res.rowCount == 0) return null;

    let user = res.rows[0]
    //console.log(userid)
   // console.log(user)
    return user;
}


export async function get_user_by_auth(email, password){
    let res = await query(`SELECT * FROM users WHERE (email = '${email}' AND password = '${password}')`)
    if(res.rowCount == 0) return null;

    let user = res.rows[0]
    //console.log(userid)
   // console.log(user)
    return user;
}