import { StaticQuery, graphql } from "gatsby"
import * as React from "react"

//Social React Icons
import { AiOutlineYoutube } from "@react-icons/all-files/ai/AiOutlineYoutube"
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram"
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook"
import { IconContext } from "@react-icons/all-files"

export default function Social() {
    return (
        <StaticQuery
            query={graphql`
            {
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
                    <ul>
                        {data.sanityProfileSettings.social.youtube &&
                            <li>
                                <a href={data.sanityProfileSettings.social.youtube} target="_blank">
                                    <IconContext.Provider value={{ size: '25px' }}>
                                        <AiOutlineYoutube />
                                    </IconContext.Provider>
                                </a>
                            </li>
                        }
                        {data.sanityProfileSettings.social.instagram &&
                            <li>
                                <a href={data.sanityProfileSettings.social.instagram} target="_blank">
                                    <IconContext.Provider value={{ size: '25px' }}>
                                        <AiOutlineInstagram />
                                    </IconContext.Provider>
                                </a>
                            </li>
                        }
                        {data.sanityProfileSettings.social.facebook &&
                            <li>
                                <a href={data.sanityProfileSettings.social.facebook} target="_blank">
                                    <IconContext.Provider value={{ size: '25px' }}>
                                        <AiOutlineFacebook />
                                    </IconContext.Provider>
                                </a>
                            </li>
                        }
                    </ul>
                </>
            )}
        />
    )
}