const express = require('express');
const router = express.Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const { text, project_id } = req.body;
        const { user_id } = req.session;

        const newComment = await Comment.create({
            text,
            user_id,
            project_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.error("Error while creating comment:", err);
        res.status(400).json(err);
    }
});

module.exports = router;
