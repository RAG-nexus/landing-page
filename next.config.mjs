/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin";

const nextConfig = nextTranslate({
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
});

export default nextConfig;
