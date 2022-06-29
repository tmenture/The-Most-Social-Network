// Express requirement to set up routes
const router = require('express').Router();

// Imports all routes in directory
const apiRoutes = require('./api');

// Adds prefix of api to all routes imported from directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> 404 Page Not Found!</h1>');
});

// Exports routes
module.exports = router;