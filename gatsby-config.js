module.exports = {
  siteMetadata: {
    title: `rah-profile-site`,
    siteUrl: `https://www.yourdomain.tld`,
    author: "Erwin Joshua Manuel",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/logo/RAH-logo-black.png`,
      },
    },
  ],
};
