import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here

interface PostTemplateProps extends PageProps {
  data: Queries.PostTemplateQuery
}

export default function PostTemplate({ data, children }: PostTemplateProps) {
  return (
    <>
      <h1>{data.mdx!.frontmatter!.title}</h1>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </>
  )
}

export const query = graphql`
  query PostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`