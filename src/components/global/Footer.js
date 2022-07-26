import { graphql, Link, StaticQuery } from "gatsby"
import * as React from "react"
import Social from "./Social"

export default function Footer() {
    return (
        <StaticQuery
            query={graphql`
            {
                allSanityLegal {
                  nodes {
                    slug {
                      current
                    }
                    title
                  }
                }
              }
              
            `}
            render={data=> (
                <>
                <footer style={{
                    backgroundColor: '#E8CEB3'
                }}>
                    <div className="py-10 text-center">
                        <div className="flex justify-center text-center w-full mb-10">
                        <Social/>
                        </div>
                        <ul>
                            {data.allSanityLegal.nodes.map((node) => {
                                return (
                                    <li className="inline-block mx-2">
                                        <Link to={"legal/" + node.slug.current}>{node.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </footer>
                </>
            )}
        />
    )
}