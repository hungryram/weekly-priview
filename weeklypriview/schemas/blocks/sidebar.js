export default {
    title: 'Sidebar',
    name: 'sidebar',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Blocks',
            name: 'blocks',
            type: 'sidebarBlocks'
        }
    ]
}