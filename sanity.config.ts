import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { projectId, dataset, apiVersion } from "./sanity/sanity.environment";

const config = defineConfig({
  name: "default",
  title: "Jacob Gronberg",
  projectId,
  dataset,
  apiVersion,
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("About Page").id("aboutPage").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("aboutPage").documentId("aboutPage")
            ),

            // Regular document types
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("exhibition").title("Exhibitions"),
          ]),
    }),
  ],
  schema: {
    types: schemas,
  },
});

export default config;
