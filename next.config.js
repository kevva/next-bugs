/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    swcPlugins: [['@swc/plugin-noop', {}]],
  },
}

export default nextConfig
