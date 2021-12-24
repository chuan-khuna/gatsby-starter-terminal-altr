module.exports = {
  siteMetadata: {
    name: "gatsby-starter-terminal",
    description: "A Gatsby starter for @pauliescanlon/gatsby-theme-terminal",
    keywords: ["tech", "blog", "boop"],
    siteUrl: "https://gatsby-starter-terminal.netlify.com",
    siteImage: "terminal-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 240,
      postPerPage: 50,
    }
  },
  plugins: [
    {
      resolve: "@chuan-khuna/gatsby-theme-terminal-altr",
      options: {
        source: [{name: "posts", dir: "posts"}]
      }
    }
  ]
};
