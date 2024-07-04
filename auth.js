import nextAuth, { NextAuth } from "next-auth";
import { Credentials } from "next-auth/providers/credentials";


export { signIn, signOut, auth, handlers } = nextAuth({
    providers: [
        Credentials({

        })
    ]
})