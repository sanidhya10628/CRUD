const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const Profile = require('./models/profile')

mongoose.connect('mongodb://localhost:27017/CRUD', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connection is on!....")
}).catch(err => {
    console.log("Error");
    console.log(err);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/add', (req, res) => {
    res.render('Methods/add');
})

app.post('/add', async (req, res) => {
    const newpro = new Profile(req.body);
    await newpro.save();
    res.redirect('/');
})

app.get('/update', (req, res) => {
    res.render('Methods/update');
})

app.get('/delete', (req, res) => {
    res.render('Methods/delete');
})

app.get('/find', (req, res) => {
    res.render('Methods/find');
})

app.listen(8000, () => {
    console.log("ON PORT: 8000")
})