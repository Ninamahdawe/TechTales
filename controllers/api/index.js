// require express
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const commentRoutes = require('./commentRoutes');

// Register API route handlers
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/comment', commentRoutes);

module.exports = router;