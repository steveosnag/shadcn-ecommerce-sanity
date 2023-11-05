import {createClient} from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

// sanity client
export const client = createClient({
  projectId: "nug5ohfv",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

// image builder to fetch imageUrl
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source);
}