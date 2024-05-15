/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
})


// Add your custom Next.js config here
let config = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

if (process.env.GITHUB_REPOSITORY) {
  const repositoryName = process.env.GITHUB_REPOSITORY.split('/')[1]

  config = {
    ...config,
    assetPrefix: `/${repositoryName}/`,
    basePath: `/${repositoryName}`,
  }
}

module.exports = withNextra(config)