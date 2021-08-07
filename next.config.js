module.exports = {
  env: {
    // HERE:
    // Solition 1. This will force the env variable to be inlined at build-time.
    // Next.js will replace process.env.customKey with 'my-value' at build time.
    // Trying to destructure process.env variables won't work due to the nature of webpack DefinePlugin.
    // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
    // NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
}
