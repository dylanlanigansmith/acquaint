/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "7" /*SHHHH DONT TELL ANYONE */
    }
};

export default nextConfig;
