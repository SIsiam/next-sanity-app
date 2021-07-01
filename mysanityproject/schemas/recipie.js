// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "racipe",
    title: "Racipe",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Racipe Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",

            options: {
                source: "name",
                maxLength: 96,
            }
        },

        {
            name: "coder",
            title: "Coder",
            type: "reference",
            to: { type: "coder" },
        },

        {
            name: "mainImage",
            title: "Recipie Main Image",
            type: "image",
            options: {
                hotspot: true
            }
        },

        {
            name: "ingridient",
            title: "Ingridient",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "ingridient",
                            title: "Ingridient",
                            type: "reference",
                            to: [{ type: "ingridient" }]
                        },
                        {
                            name: "wholeNumber",
                            title: "Whole Number",
                            type: "number"
                        },
                        {
                            name: "fraction",
                            title: "Fraction",
                            type: "string",
                            options: {
                                list: ["1/2", "1/3", "1/4", "3/4", "2/3"]
                            }
                        },
                        {
                            name: "unit",
                            title: "Unit",
                            type: "string",
                            options: {
                                list: ["grams", "cups", "tsp", "sfsf", "2/3"]
                            }
                        },

                    ],
                    preview: {
                        select: {
                            title: "ingridient.name",
                            name: "ingridient.name",
                            media: "ingridient.image",
                            wholeNumber: "wholeNumber",
                            fraction: "fraction",
                            unit: "unit"
                        },
                        prepare({
                            title,
                            subtitle,
                            media,
                            wholeNumber = "{no Whole Number set}",
                            fraction = "{no fraction set}",
                            unit = "{no unit set}",

                        }) {
                            return {
                                title,
                                subtitle: `${wholeNumber} ${fraction} ${unit}`,
                                media
                            }
                        }
                    }
                },
            ]
        },

        {
            name: "instruction",
            title: "Instruction",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "likes",
            title: "Likes",
            type: "number"
        },
    ],
    initialValue: {
        likes: 0,
    },

};