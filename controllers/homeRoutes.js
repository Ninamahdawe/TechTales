const express = require('express');
const router = express.Router();

// Define your home route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the home route!' });
});

module.exports = router;