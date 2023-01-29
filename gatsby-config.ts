import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Chaotic Good Software",
    siteUrl: "https://spelkington.github.io",
    menuLinks: [
      {
        label: "Blog",
        link: "/"
      },
      {
        label: "Github",
        link: "https://github.com/spelkington",
      },
      {
        label: "LinkedIn",
        link: "https://linkedin.com/in/spelkington",
      },
      {
        label: "Resume",
        link: "https://spelkington.github.io/Elkington_Resume.pdf"
      }
    ],
    flavorTexts: [
      "If Alan Turing knew the future was full of Jupyter Notebooks, he would've killed himself sooner",
      "I can code FizzBuzz in 18 different ways, and they're all wrong",
      "At any given point, I'm three days away from burying my laptop and moving off the grid"
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./src/blog/"
      },
      __key: "blog"
    }
  ]
};

export default config;
