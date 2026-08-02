import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
providers: [
  CredentialsProvider({
    name: " email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "prithwi123@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        const user  = {
            name : "Prithwi", 
            id : "1" , 
            email: "prithwikumar871@gmail.com"
        }

      if(user){
        return user
      }else{
        return null
      }
    }
  })
],
secret : process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}