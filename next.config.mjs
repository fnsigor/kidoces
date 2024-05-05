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
            {
                hostname: 'scontent-ams2-1.cdninstagram.com',
                protocol: 'https',
                pathname: "**",
            },
            {
                hostname: 'scontent-ams4-1.cdninstagram.com',
                protocol: 'https',
                pathname: "**",
            },
        ]
    }
};

export default nextConfig;
