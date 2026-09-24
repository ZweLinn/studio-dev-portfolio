import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'developer experience',
  type: 'document',
  fields: [
    defineField({
        name: 'jobTitle',
        title: 'Job title',
        type: 'string',
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'company',
        title: 'Company',
        type: 'string',
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'startDate',
        title: 'Start date',
        type: 'date',
        validation: (rule) => rule.required(),
        options: {
            dateFormat : "YYYY-MM"
        }
    }),
    defineField({
        name: 'endDate',
        title: 'End date',
        type: 'date',
        validation: (rule) => rule.required(),
        options: {
            dateFormat : "YYYY-MM"
        }
    }),
  ],
})
