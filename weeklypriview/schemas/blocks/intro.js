export default {
    title: 'Intro',
    name: 'intro',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'blockContent'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Image Alt Tag',
            name: 'altTag',
            type: 'string'
        }
    ]
}