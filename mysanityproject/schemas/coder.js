// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "coder",
    title: "Coder",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Coder Name",
            type: "string",
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
            name: "bio",
            title: "Bio",
            type: "array",
            of: [
           
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: []
                },
            ],
        },
    ],
}