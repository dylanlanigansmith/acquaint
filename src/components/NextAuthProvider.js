'use client';
import { SessionProvider } from 'next-auth/react'; //TODO



//this is either wrong or redundant 
// https://next-auth.js.org/getting-started/client


export default function NextAuthProvider({ children}) {

  return ( <SessionProvider>{children}</SessionProvider>  )
}