import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/global/Layout"
import Sidebar from "../components/global/Sidebar"
import Hero from "../components/home/Hero"
import Intro from "../components/home/Intro"
import BlogCard from "../components/templates/BlogCard"

export default function Index({ data }) {

  const homeContent = data.sanityHomeContent
  const blog = data.allSanityPost
  return (
    <>
      <Layout>
        <div className="section">
          <div className="container">
            <Hero />
            <Intro
              text={homeContent.intro._rawTitle}
              image={homeContent.intro.image.asset.gatsbyImageData}
            />
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="md:flex gap-10">
              <div className="md:w-3/4">
                {blog.nodes.map((node) => {
                  return (
                    <div className="mb-10">
                      <BlogCard
                        title={node.title}
                        image={node.mainImage.asset.gatsbyImageData}
                        excerpt={node.excerpt}
                        link={"blog/" + node.slug.current}
                      />
                    </div>
                  )
                })}
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
{
  sanityHomeContent {
    intro {
      altTag
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _rawTitle
    }
    mainSidebar {
      blocks {
        link {
          externalUrl
          internalLink {
            ... on SanityPost {
              id
            }
            ... on SanityLegal {
              id
            }
            ... on SanityAuthor {
              id
              name
            }
          }
          text
        }
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      heading
    }
  }
  allSanityPost(limit: 4) {
    nodes {
      slug {
        current
      }
      title
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      author {
        name
        slug {
          current
        }
      }
      _rawBody
      excerpt
    }
  }
}

`