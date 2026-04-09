import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'System Name', type: 'string' }),
    defineField({ 
      name: 'metric', 
      title: 'Primary KPI / Impact Metric (e.g. 35% Latency Reduction)', 
      type: 'string' 
    }),
    defineField({
      name: 'problem',
      title: 'The Problem Statement',
      type: 'text',
      description: 'What architectural or product problem were you solving?'
    }),
    defineField({
      name: 'architecture',
      title: 'Architecture & Engineering Decisions',
      type: 'array',
      of: [{type: 'block'}], 
      description: 'Rich text describing how you built it and why.'
    }),
    defineField({
      name: 'challenges',
      title: 'Bottlenecks & Trade-offs',
      type: 'text',
      description: 'Discuss technical challenges like Race conditions or O(N) constraints.'
    }),
    defineField({
      name: 'techStack',
      title: 'Core Technologies Leveraged',
      type: 'array',
      of: [{type: 'string'}],
      options: { layout: 'tags' }
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'System Architecture Diagram / Screenshot',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
