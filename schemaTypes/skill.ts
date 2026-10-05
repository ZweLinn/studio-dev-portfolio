import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
      defineField({
          name: 'skillList',
          title: 'Skill list',
          type: 'array',
          of: [
              {
                  type: "object",
                  fields: [
                      defineField({
                          name: 'skillName',
                          title: 'Skill name',
                          type: 'string',
                          validation: (rule) => rule.required(),
                      }),
                      defineField({
                          name: 'iconClass',
                          title: 'Icon class',
                          type: 'string',
                          validation: (rule) => rule.required(),
                      }),
                  ],
              }
          ],
          validation: (rule) => rule.required()
      }),
  ],
})
