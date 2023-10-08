const sequelize = require('../config/connection');

const seedUsers = require('seedusers');
const seedBlog = require('seedblog');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedBlog();

  console.log("DB seeded");
  process.exit(0);
  
};

seedDatabase();