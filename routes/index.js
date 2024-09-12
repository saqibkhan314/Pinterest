var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/createuser', async function(req, res, next) {
 let createdUser =  await userModel.create({
    username:"saqib",
    password: "saqib1234",
    email: "saqib123@gmail.com",
    fullName: "saqib khan"})
    res.send(createdUser);
  })
  
router.get('/createpost', async function(req, res, next) {
 let createdPost =  await postModel.create({
  postText: "hello everyone",
  user: "66d99eb230e2934812103070",  // in post there is id of user
})
let user = await userModel.findOne({
  _id:"66d99eb230e2934812103070"
})
user.posts.push(createdPost._id);
await user.save();
res.send("done")
})

router.get('/allusers', async function(req, res, next) {
  let user = await userModel.findOne({
    _id:"66d99eb230e2934812103070"
  }).populate('posts')
  res.send(user)
});
  

module.exports = router;











//DATA ASSOCIATION:

// EK MODEL SE DUSRE MODEL KE DATA KO JOD DENA ID KE THROUGH USSE HI DATA ASSOCIATION BLTE H....MEANS SUPPOSE THERE ARE TWO THINGS USER AND USER'S POST HOW IT WILL BE KNOWN WHETHER THIS POST IS BELONG TO THAT SPECIFIC USER ONLY AND VICE-VERSA IT WILL BE KNOWN WHEN USER HAVE THE PARTICULAR ID OF THAT POST AND VICE-VERSA FROM THIS BOTH USER AND POST WIL BE CONNECTED
