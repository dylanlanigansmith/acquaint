
import * as bcrypt from 'bcrypt';

/*
userid auto assigned when you interact 




*/

export async function  create_password_for_user(plaintext) {
    const salt_rounds = 4; //sorry users 
    return await bcrypt.hash(plaintext, salt_rounds);
}


export async function verify_password_for_user(user, plaintext) {
   
    const correct = await bcrypt.compare(plaintext, user.password)

    console.log(`${user.display_name} logged in `)
    return correct
}