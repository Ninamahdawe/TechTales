// const Comment = require('./Comments');
const Project = require('./Project');
const User = require('./User');

User.hasMany(Project, {
    foreignKey: 'user_id',
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Project };