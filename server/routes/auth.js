const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
  //
  //   const user = await new User({
  //     username: 'john',
  //     email: 'john@gmail.com',
  //     password: '1234564',
  //   });
  //   await user.save();
  //   res.send('ok');
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status;
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
