const { Prisma } = require('@prisma/client');

const notes = [
  {
    name: 'Shopping list',
    category: 'task',
    content: 'Tomatoes, bread',
    dates: [],
    isArchived: false,
  },
  {
    name: 'War',
    category: 'random',
    content: 'Fill the same as 23th of February',
    dates: [],
    isArchived: false,
  },
  {
    name: 'Postoffice',
    category: 'task',
    content: 'Send a package',
    dates: [],
    isArchived: false,
  },
  {
    name: 'Optimization',
    category: 'idea',
    content: 'Add cache',
    dates: [],
    isArchived: true,
  },

  {
    name: 'Architecture',
    category: 'idea',
    content: 'What if use decorator',
    dates: [],
    isArchived: false,
  },

  {
    name: 'Shopping list',
    category: 'task',
    content: 'Buy winter shoes',
    dates: [],
    isArchived: true,
  },

  {
    name: 'Shopping list',
    category: 'task',
    content: 'Tomatoes, bread',
    dates: [],
    isArchived: false,
  },
];

module.exports = {
  notes,
};
