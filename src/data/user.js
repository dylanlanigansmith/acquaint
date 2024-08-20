import { query, user_query } from "@/data/db";

import { create_password_for_user } from "@/data/shadow";

function bad_user(user) {
  return user == null || !user;
}

export function unknown_user(params) {
  return {
    userid: "", // UUID, can be generated as needed
    email: "",
    password: "guest",
    display_name: "",
    bio: "",
    showcase_url: "",
    profile_pic: "/defaultpfp.png",
    date_created: null,
    username: "cookie",
  };
}

export async function get_user_by_id(userid) {
  return await user_query(`SELECT * FROM users WHERE userid = '${userid}'`);
}

export async function get_user_by_identifier(username_or_email) {
  let user = await user_query(
    `SELECT * FROM users WHERE (email = '${username_or_email}' OR username = '${username_or_email}')`
  );
  console.log(`userbyidentifier ${username_or_email}`, user);
  return user;
}

export async function get_user_by_auth(form_of_auth, password) {
  let user = null;
  user = get_user_by_identifier(form_of_auth);
  if (bad_user()) return { status: "not found" };

  if (!verify_password_for_user(user, password)) return { status: "incorrect" };

  return user;
}

export async function create_user(
  identifier = { type: "username", value: "guest" },
  plaintext_password = "guest"
) {
  //make sure user doesnt exist
  console.log(
    `try create user '${identifier.type}' ${identifier.value} / ${plaintext_password}`
  );
  let existing_user = await get_user_by_identifier(identifier.value);
  if (existing_user != null) return { status: "userexists" };
  console.log("create user query")
  let password = await create_password_for_user(plaintext_password);

  let user = unknown_user();
  if (identifier.type == "email")
    user.email = identifier.value
  if (identifier.type == "username")
    user.email = identifier.value
  const create_query = `INSERT INTO users (
        email, 
        password, 
        display_name, 
        profile_pic,  
        username
) VALUES (
    '${user.email}', 
    '${password}', 
    '${user.display_name}',  
    '${user.profile_pic}', 
    '${user.username}' 
);`;

console.log(create_query)
  console.log("create user query")
  let val = await query(create_query);

  console.log(`add user '${identifier}' = ${val}`);

  return { status: `${val}` };
}
