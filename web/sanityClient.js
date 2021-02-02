const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: '', // or leave blank to be anonymous user
});

export default client;
