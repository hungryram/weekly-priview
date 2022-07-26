import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/home/Hero"
import Intro from "../components/home/Intro"

export default function Index({ data }) {

  const homeContent = data.sanityHomeContent
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
          gatsbyImageData(placeholder: BLURRED, width: 300)
        }
      }
      _rawTitle
    }
  }
}
`