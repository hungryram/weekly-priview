import { PortableText } from "@portabletext/react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Sidebar from "../../components/global/Sidebar"

export default function Posts({ data }) {
    const sanity = data.sanityPost
    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        <div className="md:flex gap-10">
                            <div className="md:w-3/4">
                                <h1 className="h1">{sanity.title}</h1>
                                <GatsbyImage
                                    image={sanity.mainImage.asset.gatsbyImageData}
                                    alt={sanity.alt_tag}
                                    className="my-10"
                                />
                                <div className="content">
                                    <PortableText
                                        value={sanity._rawBody}
                                    />
                                </div>
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
query($id: String){
    sanityPost(id: {eq: $id}) {
      title
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _rawBody
      alt_tag
    }
  }
  
`