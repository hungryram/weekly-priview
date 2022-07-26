import * as React from "react"
import { PortableText } from "@portabletext/react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Intro({ text, image, altTag }) {
    return (
        <>
            <div className="section mt-2 py-10 md:px-20" style={{
                backgroundColor: '#FFD0F8'
            }}>
                <div className="container">
                <div className="md:flex items-center gap-20 justify-center">
                    <div className="md:w-2/3">
                        <div className="content">
                        <PortableText
                            value={text}
                        />
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <GatsbyImage
                            image={image}
                            alt={altTag}
                            className="rounded-full"
                        />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}