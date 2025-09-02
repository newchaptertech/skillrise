/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed `output: "export"` so middleware and dynamic server features work in dev.
  images: {
    unoptimized: true,
  },
  // ...any other config you have
};

module.exports = nextConfig;
