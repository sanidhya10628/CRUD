const mongoose = require('mongoose');


const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'others']
    },

    branch: {
        type: String,
        required: true,
        enum: ['CSE', 'IT', 'EC', 'ME', 'CE', 'BM', 'EE', 'Pharmcy']
    },

    desc: {
        type: String,
        required: false
    }
})




const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
