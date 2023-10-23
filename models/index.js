const Comment = require('./Comment');
const Project = require('./Project');
const User = require('./User');

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.hasMany(Comment, {
    foreignKey: 'project_id',

});
Project.belongsTo(User, {
    foreignKey: 'user_id',
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Project, {
    foreignKey: 'project_id',
});

module.exports = { User, Project, Comment };