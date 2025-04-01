/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      domains: ["localhost","amirhahmadi.liara.run","amirbucket.storage.c2.liara.space","res.cloudinary.com"],
    },
    experimental: {
      serverActions: {
        bodySizeLimit: '10mb',
      },
    },
    output:'standalone',
  };
  
  
  export default nextConfig;