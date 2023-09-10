import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import helado from "./schemas/project-schema";

export const config = defineConfig({
  projectId: "a8claon8",
  dataset: "production",
  title: "heladeria",
  basePath: "/admin",
  useCdn: false,
  apiVersion: "2023-09-09",
  plugins: [deskTool()],
  schema: { types: [helado] },
});
