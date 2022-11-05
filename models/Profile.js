const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    imgURL: {
        type: String, 
        required: false
    },
    name: {
    type: String, 
    required: true
  },
	information: {
    type: String, 
    required: true
  }
  
});

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;