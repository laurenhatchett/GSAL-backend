const db = require("../models")


//return all profiles
const index = (req, res) => {
    db.Profile.find({}, (error, profiles) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        profiles,
        requestedAt: new Date().toLocaleString()
      });
    });
  };
  
// create a single profile
const create = (req, res) => {
    db.Profile.create(req.body, (error, createdProfile) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(createdProfile); //  .json() will send proper headers in response so client knows it's json coming back
    });
  };

//destroy a single holiday by its ID
const destroy = (req, res) => {
    db.Profile.findByIdAndDelete(req.params.id, (error, deletedProfile) => {
        //if no holiday is found, let the frontend know with the json error message
        if(!deletedProfile) return res.status(400).json({error: "Profile not found"})
        //if an error is produced, display it
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({
            message: `Profile ${deletedProfile.name} deleted successfully! `
        })
    })
}

// update a single profile

const update = (req, res) => {
    db.Profile.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body
      }, 
      { new: true }, 
      (error, updatedProfile) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(updatedProfile)
    });
  };
  


  module.exports = {
      index,
      create,
      destroy,
      update
  }
  