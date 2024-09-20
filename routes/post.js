const mongoose = require('mongoose');

// Create a schema for posts
const postSchema = new mongoose.Schema({
  imageText: {
    type: String,   // Text content of the post
    required: true  // The post must have text
  },
  image: {
    type: String
  },
  user:{
   type: mongoose.Schema.Types.ObjectId,
   // ex: if the type would be number we should write Number , if the type would be String we should write string ,if array then Array, so for the we give this mongoose...ObjectId we are doing this bcoz this post belongs to that particular user only but it has one problem we know that it is users ID but mongoose doen't know whose id is this so to avoid this we intoduce "ref" => reference => it tells from which model does this user ID belongs from.
   ref: 'User'
  },
  likes: {
    type: Array,   // Number of likes on the post
    default: []      // Default is 0 likes if no one has liked it yet
  }
},
 {
  timestamps: true  // Automatically adds createdAt (date and time) and updatedAt
});

// Create a model using the schema
module.exports  = mongoose.model('Post', postSchema);

