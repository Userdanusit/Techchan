/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.technicchan.ac.th" },
      { protocol: "https", hostname: "**.technicchan.ac.th" }
    ]
  }
};
export default nextConfig;
