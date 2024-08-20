import NextAuth from "next-auth"
import { authconfig } from "@/auth"


async function auth(req, context) {
  return await NextAuth(req, context, authconfig)
}

export  { auth as GET, auth as POST }
