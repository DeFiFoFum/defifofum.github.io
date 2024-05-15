# Setup

- Uses <https://nextra.site/>

## Setup Nextra w/ GitHub Pages

- See [this commit](a398862d2e3dbd16d4d05cc0482b9f008b1bbbf8) for the changes made to the config for gh pages deployment.

- Followed this guide to deploy to GH Pages: <https://github.com/42arch/nextra-github-pages/tree/main>
- Uses this action for GH Pages: <https://github.com/peaceiris/actions-gh-pages>

1. Update [next.config.js](./next.config.js) to include `output: 'export'`. Along with some other small changes.
2. Add [deploy.yaml](./.github/workflows/deploy.yaml) to `.github/workflows/` to deploy to GH Pages with pnpm.
3. Also needed to [create a new GitHub ssh key](https://github.com/42arch/nextra-github-pages/tree/main?tab=readme-ov-file#configure-github-repository) for the action to work.
