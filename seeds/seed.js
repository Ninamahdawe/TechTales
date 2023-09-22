const fs = require('fs');
const path = require('path');
const sequelize = require('../config/connection');
const { Project } = require('../models');

const projectData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'projectData.json'), 'utf-8')
);
const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        await Project.bulkCreate(projectData);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }

    process.exit(0);
};

// Call the seedDatabase function
seedDatabase();