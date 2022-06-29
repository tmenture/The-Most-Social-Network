// Express requirement to set up routes
const router = require('express').Router();

// Imports user and thought routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Adds prefix users to route call
router.use('/users', userRoutes);

// Adds prefix thoughts to route call
router.use('/thoughts', thoughtRoutes);

// Exports routes 
module.exports = router;