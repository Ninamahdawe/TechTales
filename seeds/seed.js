// const fs = require('fs');
// const path = require('path');
// const sequelize = require('../config/connection');
// const { Project } = require('../models');

// const userData = require('./userData.json');
// const projectData = JSON.parse(
//     fs.readFileSync(path.join(__dirname, 'projectData.json'), 'utf-8')
// );
// const seedDatabase = async () => {
//     try {
//         await sequelize.sync({ force: true });

//         await Project.bulkCreate(projectData);

//         console.log('Database seeded successfully!');
//     } catch (error) {
//         console.error('Error seeding database:', error);
//     }

//     process.exit(0);
// };

// // Call the seedDatabase function
// seedDatabase();
const sequelize = require('../config/connection');
const { User, Project, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const project of projectData) {
        await Project.create({
            ...project,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();