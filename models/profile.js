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
// name: 'Sanidhya Mahajan', age: '19', gender: 'male', branch: 'CSE', desc: 'cse student'
// name: {
//     type: String,
//         required: true
// },
// price: {
//     type: Number,
//         required: true,
//             min: 0
// },
// category: {
//     type: String,
//         lowercase: true,
//         enum: ['fruit', 'vegetable', 'dairy']
// }