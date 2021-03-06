// eslint-disable-next-line react-hooks/rules-of-hooks
import {
    sanityClient, urlFor,
    usePreviewSubscription,
    PortableText
} from "../../lib/sanity";

const recipiesQuery = `*[_type == 'racipe' && slug.current == $slug][0]{
    _id,
    name,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },

    ingridient[]{
        unit,
        wholeNumber,
        fraction,
        ingredient->{
            name
        }
    },
    instruction,
    likes

  }`;

import { useState } from "react";

export default function oneRecipe({ data, preview }) {

  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { data: racipe } = usePreviewSubscription(recipiesQuery, {
    //     params: { slug: data.racipe?.slug.current },
    //     initialData: data,
    //     enabled: preview,
    // })

    // console.log(data.racipe.name);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [like, setLikes] = useState(data.racipe?.likes);
    console.log(data.racipe?.likes);

    const AddLike = async () => {
        const res = await fetch("/api/handle-like", {
            method: 'POST',
            body: JSON.stringify({ _id: racipe._id }),
        })
        const data = await res.json();
        setLikes(data.likes)
    }
    const { racipe } = data;


    return (
        <div>
            <div className="">
                <h1> {racipe.name} </h1>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={urlFor(racipe.mainImage).url()} height="100%" width="100%" alt="ds" />
            </div>
            <div className="">
                <ul>
                    {racipe.ingridient?.map((ingridient) => (
                        // console.log("d",ingridient)
                        <li key={ingridient._key}>
                            {ingridient?.wholeNumber}
                            {ingridient?.fraction}
                            {" "}
                            {ingridient?.unit}
                            <br />

                            {ingridient?.ingridient?.name}

                        </li>
                    ))}
                    <PortableText blocks={data.racipe?.instruction} />
                </ul>
            </div>

            <button className="btn" onClick={AddLike}> {like} ???? </button>
        </div>
    );
}
export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "racipe" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );

    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps({ params }) {
    const { slug } = params;
    const racipe = await sanityClient.fetch(recipiesQuery, { slug })
    return { props: { data: { racipe }, preview: true } }
}