import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from './../../../util/mongodb';
import User from './../../../models/User';
import dbConnect from "../../../util/dbConnect";
import bcrypt from 'bcryptjs';
dbConnect();

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const email = credentials.email;
                const password = credentials.password;
                const user = await User.findOne({ email: email });

                if (!user) {
                    throw new Error("You haven't registered yet!");
                }
                if (user) {
                    return signInUser({ user, password });
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/login",
    },
    // adapter: MongoDBAdapter(clientPromise),
    database: process.env.MONGODB_URI,
    secret: "secret",
    debug: process.env.NODE_ENV === "development",
}

export default NextAuth(authOptions)

const signInUser = async ({ user, password }) => {
    const isMAtch = await bcrypt.compare(password, user.password);
    if (!isMAtch) {
        throw new Error("Incorrect password!");
    }
    return user;
};