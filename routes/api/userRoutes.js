const router = require('express').Router();

// Importing the user controllers
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Get and post routes for showing and creating users
router.route('/').get(getUsers).post(createUser);

// Get one, update, or delete single user 
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Post and delete route for adding or removing friends
router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);

// Exporting the routes
module.exports = router;