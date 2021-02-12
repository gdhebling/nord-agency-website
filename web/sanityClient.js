const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  token: '', // or leave blank to be anonymous user
  useCdn: true,
});

export default client;
