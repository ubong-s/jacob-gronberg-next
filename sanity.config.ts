import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
// import { visionTool } from "@sanity/vision";
// import { schemaTypes } from "./schemas";

const config = defineConfig({
  name: "default",
  title: "Jacob Gronberg",
  projectId: "idbcp5ww",
  dataset: "production",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
