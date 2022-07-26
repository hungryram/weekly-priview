import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
    return (
        <>
        <Navbar />
        <Helmet>
            <style>
                {`
                    :root {
                        --accent-color: #e39e56
                    }
                `}
            </style>
        </Helmet>
            <main>
                {children}
            </main>
        <Footer />
        </>
    )
}