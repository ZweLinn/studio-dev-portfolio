import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'certifications',
  title: 'Certifications',
  type: 'document',
  fields: [
      defineField({
          name: 'certificationList',
          title: 'Certification list',
          type: 'array',
          of: [
              {
                  type: "object",
                  fields: [
                      defineField({
                          name: 'certificationName',
                          title: 'Certification name',
                          type: 'string',
                          validation: (rule) => rule.required(),
                      }),
                      defineField({
                          name: 'certificationUrl',
                          title: 'Certification URL',
                          type: 'url',
                          validation: (rule) => rule.required(),
                      }),
                  ],
              }
          ],
          validation: (rule) => rule.required()
      }),
  ],
})
