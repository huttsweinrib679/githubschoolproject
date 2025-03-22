// Example of using Node.js to connect to MongoDB and retrieve data

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/testDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the document
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, unique: true }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Find all users in the collection
User.find({}, (err, users) => {
  if (err) {
    console.error(err);
  } else {
    console.log(users);
  }
});
