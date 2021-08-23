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

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-205628146-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "UA-205628146-1",
        // Enables Google Optimize Experiment ID
        experimentId: "UA-205628146-1",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "UA-205628146-1",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://www.quickcutwa.com.au/",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
}
