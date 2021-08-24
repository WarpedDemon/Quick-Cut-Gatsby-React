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
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-205628146-1", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        //gtagConfig: {
        //  optimize_id: "OPT_CONTAINER_ID",
        //  anonymize_ip: true,
        //  cookie_expires: 0,
        //},
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: false,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
  ],
}
