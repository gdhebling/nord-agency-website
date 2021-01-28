export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  initialValue: {
    featured: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'figure',
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      customer: 'customer.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, customer, media } = selection;
      return {
        title: title,
        subtitle: customer,
        media,
      };
    },
  },
};
