export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    {
      name: 'src',
      title: 'Source',
      type: 'string',
      isUnique: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'src',
    },
  },
}
