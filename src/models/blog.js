const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const BlogSchema = new mongoose.Schema({
    

    title: {
        type: String,
        required: 'Title is required',
        required: false,
        max: 150
    },

    description: {
        type: String,
        required: 'Description is required',
        required: false,
        max: 1000
    },

    
    
}, {timestamps: true});

module.exports = mongoose.model('Blogs', BlogSchema);