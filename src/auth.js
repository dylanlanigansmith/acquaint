import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import { get_user_by_auth} from "@/data/user";
import { getServerSession } from "next-auth"


export const authconfig = {
     pages : {
         signIn : "/login",
         signOut : "/logout"
       },
     providers : [
     CredentialsProvider({
         // The name to display on the sign in form (e.g. 'Sign in with...')
         name: "Credentials",
         // The credentials is used to generate a suitable form on the sign in page.
         // You can specify whatever fields you are expecting to be submitted.
         // e.g. domain, username, password, 2FA token, etc.
         // You can pass any HTML attribute to the <input> tag through the object.
         credentials: {
           username: { label: "email", type: "text", placeholder: "jsmith" },
           password: { label: "Password", type: "password" },
         },
         async authorize(credentials, req) {
           // You need to provide your own logic here that takes the credentials
           // submitted and returns either a object representing a user or value
           // that is false/null if the credentials are invalid.
           // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
           // You can also use the `req` object to obtain additional parameters
           // (i.e., the request IP address)
           const ret = await get_user_by_auth(
             credentials.username,
             credentials.password
           );
   
           console.log("auth returning: ", ret);
           if(!ret) return null

           if (ret.status=="valid" && ret.user != null){
                return ret.user
           }

           return false;
         },
       })
     ],
     basePath: '/auth',
     debug: true

}



export const handler = NextAuth(authconfig);

// Use it in server contexts
export function auth(args = []) {
    return getServerSession(...args, authconfig)
  }
