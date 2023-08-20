import { createClient } from "@sanity/client";

const SanityClient = createClient({
  projectId: "y1x44ma8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
});

export default SanityClient;
