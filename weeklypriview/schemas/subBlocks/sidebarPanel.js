export default {
    title: 'Sidebar Options',
    name: 'sidebarOptions',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Link',
            name: 'link',
            type: 'subMenu'
        }
    ]
}