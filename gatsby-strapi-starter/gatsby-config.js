let facebook_pixel = ""
let gtm = "1234"

module.exports = {
  siteMetadata: {
    title: `Kirstie Wilkinson`,
    description: `My website. `,
    author: `Me`,
    siteUrl: `https://gatsby-strapi-starter.netlify.com/`, 
    phone: "7707137720",
    fax: "180012345",
    address: "Atlanta, GA",
    email: "kwilkinson.professional@gmail.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtm,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "./src/assets/images/gatsby-icon.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
  ],
}
