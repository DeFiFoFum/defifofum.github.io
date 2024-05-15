/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
})

const defaultRepositoryName = 'defifofum.github.io';
// Add your custom Next.js config here
let config = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: `/${defaultRepositoryName}/`,
  basePath: `/${defaultRepositoryName}`,
}

if (process.env.GITHUB_REPOSITORY) {
  const repositoryName = process.env.GITHUB_REPOSITORY.split('/')[1]

  config.assetPrefix =`/${repositoryName}/`,
  config.basePath = `/${repositoryName}`
}

module.exports = withNextra(config)