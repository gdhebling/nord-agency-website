import { MdBusiness } from 'react-icons/md';

export default {
  name: 'customers',
  title: 'Customers',
  type: 'document',
  icon: MdBusiness,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Logo',
      type: 'figure',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `${title}`,
        media,
      };
    },
  },
};
