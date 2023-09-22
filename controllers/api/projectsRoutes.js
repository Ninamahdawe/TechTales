
const express = require('express');
const router = express.Router();

// Import your Project model and any necessary middleware/functions
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// Define your project routes

// Create a new project
router.post('/', withAuth, async (req, res) => {
    try {
        const { title, description } = req.body;
        const { user_id } = req.session;

        const newProject = await Project.create({
            title,
            description,
            user_id,
        });

        res.status(201).json(newProject);
    } catch (err) {
        console.error("Error while creating project:", err);
        res.status(400).json(err);
    }
});

// Get a specific project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project) {
            res.status(404).json({ message: 'Project not found' });
        } else {
            res.status(200).json(project);
        }
    } catch (err) {
        console.error("Error while fetching project:", err);
        res.status(500).json(err);
    }
});


module.exports = router;
