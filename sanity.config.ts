import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "gq3ci81f",
    dataset: "production",
    title: "Dibs Website",
    apiVersion: "2023-04-18",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;