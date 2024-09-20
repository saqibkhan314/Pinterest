const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Pinterest")
// Create a schema for user details
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    //required: true, //means that this field must always have a value (it can't be empty).
    //unique: true // no two users can have same username in DB
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Post'
   // default: [] // if this no post created by users so it will be empty
  }],// array of post id
  dp: {
    type: String,  // URL link to the user's display picture
    default: 'default-dp.png' //means if users does not upload a img then by default it will be given something
  }
}, {
  timestamps: true // tells Mongoose to automatically add two extra fields to your schema:
  //1.createdAt – The exact time and date when the user was created.
  //2.updatedAt – The time and date when the user's information was last updated.
});

// Create a model using the schema
userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);

