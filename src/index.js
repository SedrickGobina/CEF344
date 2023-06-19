import React from 'react';
import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sedrickgobina361:IluO3JxYdYYBgmMd@backend-portfolio.eklgj2e.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
  // You can start defining your models and perform database operations here.
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);


const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
  });
  
  newUser.save((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('User created successfully!');
    }
  });
  