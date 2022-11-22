import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";
import KeycloakProvider from "next-auth/providers/keycloak";
import Credentials from "next-auth/providers/credentials";


const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        }),
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID,
            clientSecret: process.env.KEYCLOAK_SECRET,
            issuer: process.env.KEYCLOAK_ISSUER,
        })
    ]
}

export default (req, res) => NextAuth(req, res, options)