import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company / Organization",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g., May 2024 - Present",
    }),
    defineField({
      name: "companyUrl",
      title: "Company URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Engineering Scope & Impact",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Describe the systems built, APIs integrated, and architectural wins.",
    }),
    defineField({
      name: "techStack",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
});
