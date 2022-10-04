const { PrismaClient } = require('@prisma/client');
const { notes } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {

    await prisma.note.deleteMany();
    console.log('Deleted records in note table');

    await prisma.note.createMany({
      data: notes,
    });

    console.log('Added notes data');

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
