import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"

export default function BlogList({ title, image, altTag, link }) {
    return (
        <>
            <div>
                <Link to={link}>
                    <GatsbyImage
                        image={image}
                        alt={altTag}
                    />
                </Link>
                <h2 className="md:text-2xl my-5 text-center">{title}</h2>
                <div className="pt-2 text-center">
                    <Link to={link} className="accent font-medium uppercase">Read more</Link>
                </div>
            </div>
        </>
    )
}