import { mergeAnonymousCartIntoUserCart } from "@/lib/db/cart";
import prisma from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      await mergeAnonymousCartIntoUserCart(user.id);
    },
  },
};

// Next.js route handlers should export `GET` and `POST`
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



// // src/app/api/auth/[...nextauth]/route.ts

// import { mergeAnonymousCartIntoUserCart } from "@/lib/db/cart";
// import prisma from "@/lib/db/prisma";
// import { env } from "@/lib/env";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: env.GOOGLE_CLIENT_ID,
//       clientSecret: env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async session({ session, user }) {
//       session.user.id = user.id; 
//       return session;
//     },
//   },
//   events: {
//     async signIn({ user }) {
//       await mergeAnonymousCartIntoUserCart(user.id);
//     },
//   },
// };

// export const dynamic = 'force-static';

// export async function GET() {
//   try {
//     // Replace with your actual MongoDB API endpoint
//     const apiUrl = 'https://data.mongodb-api.com/app/antiqmazo/endpoint/data/v1/action/findOne';
    
//     const res = await fetch(apiUrl, {
//       method: 'POST', // Use POST if you're sending a query or request body
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY, // Ensure this environment variable is set
//       },
//       body: JSON.stringify({
//         collection: "your_collection_name",
//         database: "your_database_name",
//         dataSource: "your_data_source_name",
//         filter: { /* Your filter criteria here */ }
//       }),
//     });

//     if (!res.ok) {
//       throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();

//     return new Response(JSON.stringify({ data }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return new Response("Internal Server Error", {
//       status: 500,
//     });
//   }
// }

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
