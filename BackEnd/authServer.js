require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
// Load User model
const User = require('../DB/models/Client');
const { forwardAuthenticated } = require('../config/auth');
const { authenticateToken } = require('../config/auth');
const app = express()
// Login Page
router.get('/login', authenticateToken, (req, res) => {
  User.find({}, (err, docs)=>{
    if(err) throw err;
    res.json(docs.filter(doc => doc.email === req.body.email));
  })
});

// Register Page
//router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { fullName, email, password, address } = req.body;
  //let errors = [];
  User.findOne({ email: email }).then(user => {
    if (user) {
      
     res.json({ msg: 'Email already exists' });
     /* res.render('register', {
        errors,
        fullName,
        email,
        password,
        address
      });*/
    } else {
      const newUser = new User({
        fullName,
        email,
        password,
        address
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              req.flash(
                'success_msg',
                'You are now registered and can log in'
              );
              res.json(newUser)
            })
            .catch(err => console.log(err));
        });
      });
    }
  });

});

// Login
router.post('/login', async (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  User.find({email:user.email}, (err, result) => {
    if(err) throw err;
    if(result == null) res.status(400).json("Can't find user");
    try{
      if(await bcrypt.compare(user.password, result.password)){
        //res.json('OK');
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({accessToken})
      }else{
         res.json('enbaas');
      }
    }catch{
      res.status(500).json("Can't find user")
    }
  })
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.json('loged out');
});


app.listen(4000);
