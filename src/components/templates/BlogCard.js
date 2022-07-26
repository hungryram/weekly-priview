import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"

export default function BlogCard({ title, image, altTag, excerpt, link }) {
    return (
        <>
            <div>
                <Link to={link}>
                    <h2 className="md:text-2xl mb-5">{title}</h2>
                    <GatsbyImage
                        image={image}
                        alt={altTag}
                    />
                </Link>
                {excerpt &&
                    <div className="py-6">
                        <p>{excerpt}</p>
                    </div>
                }

                <div className="pt-5 text-center">
                    <Link to={link} className="accent font-medium uppercase">Continue Reading</Link>
                </div>
            </div>
        </>
    )
}