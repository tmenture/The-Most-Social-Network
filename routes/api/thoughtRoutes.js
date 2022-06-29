const router = require('express').Router();

// Importing the thought controllers for the routes
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createDiscussion,
    deleteDiscussion
} = require('../../controllers/thoughtController');

// Get all, and post route
router.route('/').get(getAllThoughts).post(createThought);

// Get one, update, or delete route
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Post route to reply and start a discussion
router.route('/:thoughtId/reactions').post(createDiscussion);

// Delete route to delete a reply from a discusison
router.route('/:thoughtId/reactions/:reactionId').delete(deleteDiscussion);

// Exporting the routes
module.exports = router;