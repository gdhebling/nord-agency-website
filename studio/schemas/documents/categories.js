import { MdViewModule, MdLabel } from 'react-icons/md';

export default {
  name: 'categories',
  type: 'document',
  title: 'Categories',
  icon: MdViewModule,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) =>
        Rule.error('You have to fill out the category title.').required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        media: MdLabel,
      };
    },
  },
};
