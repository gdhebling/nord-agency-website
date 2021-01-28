import { MdPeople } from 'react-icons/md';

export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  icon: MdPeople,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
