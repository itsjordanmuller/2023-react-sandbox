import { createClient } from "contentful";

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: SPACE_ID,
  environment: "master",
  accessToken: ACCESS_TOKEN,
});

client
  .getEntries({ content_type: "exampleProjects" })
  .then((response) => console.log(response));
