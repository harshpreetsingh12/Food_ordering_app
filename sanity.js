import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "n0luuy9o",
    dataset:'production',
    useCdn:true,
    apiVersion:'2021-10-21'

});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)

export default client;