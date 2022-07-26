import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import BlogList from "../../components/templates/BlogList"

export default function BlogIndex({ data }) {

    const sanity = data.allSanityPost

    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        <div className="grid grid-cols-3 gap-5">
                        {sanity.nodes.map((pages) => {
                            return (
                                <BlogList
                                    title={pages.title}
                                    image={pages.mainImage.asset.gatsbyImageData}
                                />
                            )
                        })}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    allSanityPost {
      nodes {
        slug {
          current
        }
        title
        mainImage {
          asset {
            gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.5)
          }
        }
      }
    }
  }
  
`