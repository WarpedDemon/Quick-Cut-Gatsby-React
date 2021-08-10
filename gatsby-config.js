/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://quickcut.netlify.app/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://quickcut.netlify.app/',
        sitemap: 'https://quickcut.netlify.app/sitemap/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/'}]
      }
    }
  ],
}
