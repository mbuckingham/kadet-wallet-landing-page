/* --Sanity API set up---*/

//import { SanityClient } from "@sanity/cli";
import sanityClient from "@sanity/client";

/* import createClient from "@sanity/client"; */
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  /* projectId: process.env.REACT_APP_SANITY_PROJECT_ID, */
  projectId: "me0ovubi",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  /* token: process.env.REACT_APP_SANITY_TOKEN, */
  token:
    "skLDQmBkzs3XdPnR5KKq7DOsWsyq9jIKL1lU2oILbGEdiUhCguDQ2B9Qwzffe1PTFc3ymYsAUPWgQFzpcB5YYrfjbzMRYrvuW87P6PnbRvo6PkY8BqrBdcweHzXZkIxQVw01pK42B0WQ3oxZ4YOtAaWblMIAzGWmyOLWcTJH8XeQ2F6g8NoS",
});
console.log(client);
const builder = imageUrlBuilder(client);
console.log(builder);
export const urlFor = (source) => builder.image(source);
console.log(urlFor);
