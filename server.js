const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const connectDB = require('./db'); 
const authRoutes = require('./routes/auth'); 

const app = express();


connectDB();

// Middleware
app.use(bodyParser.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));


app.use('/auth', authRoutes);


app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
