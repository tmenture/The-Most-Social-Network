// Necessary requirements from mongoose
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        usernae: {
            type: String,
            unique: true,
            required: true,
                trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// Implements temp data storage for a friend count 
UserSchema.virtual('friendCount'),get(function() {
    return this.friends.length;
});

// Creates the model using the schema
const User = model('User', UserSchema);

// Export the user
module.exports = User;