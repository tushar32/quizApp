const express = require('express');
const connectDB = require('./config/db');

//@route GET  api/users
//router.get('/',(req,res) => res.send('User route'));

const app = express();

//connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

//Define Routes
app.use('/api/users',users); 
//This is our route middleware
// e.g.
///api/users
///api/users/:id

app.use('/api/auth',auth);
app.use('/api/posts',posts);
app.use('/api/profile',profile);

app.get('/',(req, res) => res.send('API running'))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('API running'));