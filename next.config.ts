/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'top-right', 
  },
  experimental: {
    turbo: {
      
    },
  },
};

export default nextConfig;
