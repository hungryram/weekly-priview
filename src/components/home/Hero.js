import * as React from "react"
import p from "../../images/pinterest-1.png"
import { Link } from "gatsby"

export default function Hero() {
    return (
        <>
            <div>
                <div>
                    <div className="md:flex flex-none gap-2">
                        <div className="lg:w-1/2 relative">
                            <div className="md:h-[650px] h-64">
                            <Link to="">
                                <img src={p} alt="" className="object-cover w-full h-full"/>
                                <div className="absolute z-50 bottom-0 text-white p-10 text-2xl font-medium">
                                    <h2></h2>
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid md:grid-cols-1 gap-2">
                                <div className="relative">
                                    <Link to="">
                                        <div>
                                        <img src={p} alt="" className="object-cover w-full h-80"/>

                                            <div className="absolute z-50 bottom-0 text-white p-10 text-2xl font-medium">
                                                <h2></h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Link to="">
                                    <img src={p} alt="" className="object-cover w-full h-80"/>

                                        <div className="absolute z-50 bottom-0 text-white p-10 text-2xl font-medium">
                                            <h2></h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}