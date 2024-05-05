/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
                protocol: 'https',
                pathname: "**",
            },
            {
                hostname: 'scontent.cdninstagram.com',
                protocol: 'https',
                pathname: "**",
            },
        ]
    }
};

export default nextConfig;
