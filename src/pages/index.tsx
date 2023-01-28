import * as React from "react"
import { graphql, PageProps } from "gatsby";

export default function Home() {

  // const posts = data.allMdx.nodes

  return (
    <main>
      <h1>Hello, World!</h1>
      <p>This will be a blog, eventually!</p>
      <ol>

      </ol>
    </main>
  );
}

export const homePageQuery = graphql`
  query HomePage {
    allMdx {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`