'use client';
import { SessionProvider } from 'next-auth/react'; //TODO





export default function NextAuthProvider({ children}) {

  return ( <SessionProvider>{children}</SessionProvider>  )
}