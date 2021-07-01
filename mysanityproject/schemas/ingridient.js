// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "ingridient",
    title: "Ingridient",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Ingridient Name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "notes",
            title: "Notes",
            type: "text"
        },
    ],

};