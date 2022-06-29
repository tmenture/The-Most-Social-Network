// Necessary requirements form mongoose and date formatter
const { Schema, model, Types, trusted } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const DiscussionSchema = new Schema(
    {
        discussId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        discussBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [DiscussionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Implements temp data storage for discuss Count
ThoughtSchema.virtual('discussCount').get(function() {
    return this.reactions.length
});

// Creates model using schema
const Thought = model('Thought', ThoughtSchema);

// Exports the thought 
module.exports = Thought;