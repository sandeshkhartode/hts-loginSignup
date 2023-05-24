const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


// set strictQuery to false
mongoose.set('strictQuery', false);

// Import routes
const authRoutes = require('./routes/authRoutes');

// const {requireAuth} = require('./middleware/requireAuth');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'));

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
