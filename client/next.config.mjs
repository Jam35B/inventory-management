import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  iamges: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-jaminventorymanagement.s3.sa-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
