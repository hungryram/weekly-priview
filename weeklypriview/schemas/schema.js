// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './documents/category'
import post from './documents/post'
import author from './documents/author'

import profile from "./documents/profile"
import appearanceSettings from "./documents/appearance"
import legal from "./documents/legal"
import menu from "./documents/navigation"
import pages from "./documents/pages"
import homeContent from "./documents/home"

import social from "./blocks/social"
import contact from "./blocks/contact"
import location from "./blocks/location"
import seo from "./blocks/seo"
import branding from "./blocks/branding"
import link from "./blocks/link"
import navItem from "./blocks/navItem"
import headerMenu from "./blocks/headerMenu"
import mainColors from "./blocks/mainColors"
import intro from "./blocks/intro"
import hero from "./blocks/hero"
import sidebar from "./blocks/sidebar"

//subblocks
import subMenu from "./subBlocks/subMenu"
import sidebarPanel from "./subBlocks/sidebarPanel"
import sidebarBlocks from "./subBlocks/sidebarBlocks"


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    profile,
    appearanceSettings,
    homeContent,
    pages,
    post,
    author,
    category,
    legal,
    menu,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    social,
    contact,
    location,
    seo,
    branding,
    link,
    navItem,
    headerMenu,
    subMenu,
    mainColors,
    hero,
    intro,
    sidebarPanel,
    sidebarBlocks,
    sidebar
  ]),
})
