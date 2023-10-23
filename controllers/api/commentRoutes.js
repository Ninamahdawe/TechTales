const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        console.log("Request body:", req.body);

        const newComment = await Comment.create({
            text: req.body.text,
            user_id: req.session.user_id,
            project_id: req.body.project_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        console.error("Error when  creating comment:", err);
        res.status(400).json(err);
    }
});
// router.get('/:post_id')
module.exports = router;
