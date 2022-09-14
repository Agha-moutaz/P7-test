const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoutes = require ('./route/post');
const userRoutes = require ('./route/user');
const path = require('path');

mongoose.connect('mongodb://localhost/socnetwork?retryWrites=true&w=majority',
 { useNewUrlParser: true,
   useUnifiedTopology: true })
 .then(() => console.log('Connexion à MongoDB réussie !'))
 .catch(() => console.log('Connexion à MongoDB échouée !'));

var cors = require('cors')
app.use(cors())


app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept,Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methodes', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// })

app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/images', express.static(path.join(__dirname,'images')))



module.exports = app;
