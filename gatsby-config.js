/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/.data/',
      },
    },
  ]
};
