import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from './../../../util/mongodb';
import dbConnect from "../../../util/dbConnect";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: "/auth/login",
    },
    debug: process.env.NODE_ENV === "development",
    adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions)