const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        // remotePatterns: [
        //     {
        //         protocol: "https",
        //         hostname: "flagcdn.com",
        //         port: "",
        //         pathname: "/w320/**"
        //     }
        // ]
        domains: ["flagcdn.com", "upload.wikimedia.org"]
    },
    nextConfig
}
