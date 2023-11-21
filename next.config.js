/** @type {import('next').NextConfig} */
const nextConfig = {
  // 실험적 설정이 필요하지 않은 경우, 이 부분을 제거하거나 수정
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  // },

  images: {
    domains: ['lh3.googleusercontent.com'],
  },

  webpack(config) {
    // 웹팩 관련 설정이 필요하지 않은 경우, 이 부분을 제거하거나 수정
    // config.experiments = {
    //   ...config.experiments,
    //   topLevelAwait: true,
    // }
    return config
  }
}

module.exports = nextConfig;
