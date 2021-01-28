import { MdFeaturedPlayList } from 'react-icons/md';

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: MdFeaturedPlayList,
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
      name: 'customers',
      title: 'Customers',
      type: 'reference',
      to: [{ type: 'customers' }],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'categories' } }],
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
      customer: 'customers.name',
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
