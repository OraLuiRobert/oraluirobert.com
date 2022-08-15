module.exports = {
  siteMetadata: {
    title: "OraLuiRobert",
    titleTemplate: "%s — Our environment is fun, but our purpose is serious",
    url: "https://oraluirobert.com",
    twitterUsername: "@oraluirobert",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["IBM Plex Sans"],
      },
    },
  ],
};
