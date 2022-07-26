import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Social from "./Social"

export default function Sidebar() {
    return (
        <StaticQuery
            query={graphql`
            {
              sanityHomeContent {
                mainSidebar {
                  heading
                  blocks {
                    link {
                      externalUrl
                      internalLink {
                        ... on SanityAuthor {
                          id
                          name
                          _type
                          slug {
                            current
                          }
                        }
                        ... on SanityPost {
                          id
                          _type
                          slug {
                            current
                          }
                        }
                        ... on SanityLegal {
                          id
                          _type
                          slug {
                            current
                          }
                        }
                      }
                      text
                    }
                    image {
                      asset {
                        gatsbyImageData(placeholder: BLURRED, width: 150, height: 150)
                      }
                    }
                  }
                }
              }
              sanityProfileSettings {
                social {
                  youtube
                  yelp
                  twitter
                  tiktok
                  reddit
                  pinterest
                  linkedin
                  instagram
                  facebook
                }
              }
            }
            
            `}
            render={data => (
                <>
                    <div className="md:w-1/4">
                        <div className="bg-transparent my-10">
                            <h2 className="text-center text-2xl">{data.sanityHomeContent.mainSidebar.heading}</h2>
                            <div className="mt-10">
                                <div className="flex justify-center text-center">
                                    {data.sanityHomeContent.mainSidebar.blocks.map((node) => {
                                        return (
                                            <>
                                                <div className="w-1/2 m-1">
                                                    <Link to={(node.link.internalLink?._type === "post" && `/blog/${node.link.internalLink.slug.current}`) || (node.link.internalLink?._type === "legal" && `/legal/${node.link.internalLink.slug.current}`) || (node.link.internalLink?._type === "author" && `/authors/${node.link.internalLink.slug.current}`) || (node.link.externalUrl && `${node.link.externalUrl}`)}>
                                                        <GatsbyImage
                                                            image={node.image.asset.gatsbyImageData}
                                                            className="rounded-full"
                                                        />
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="my-10">
                          <div className="p-6 text-center" style={{ backgroundColor: '#f1e9e0' }}>
                                  <h2 className="text-center text-2xl">Follow Me</h2>
                                  <div className="mt-6 text-center justify-center flex">
                                    <Social />
                                  </div>
                          </div>
                        </div>
                    </div>
                </>
            )}
        />
    )
}