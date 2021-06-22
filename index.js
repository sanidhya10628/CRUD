const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const Profile = require('./models/profile')
const methodOverride = require('method-override')




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
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home');
})


app.get('/students', async (req, res) => {
    const profiles = await Profile.find({});
    //console.log(profiles);
    res.render('students', { profiles });
})

app.get('/students/:id', async (req, res) => {
    const { id } = req.params;
    const profile = await Profile.findById(id);
    //console.log(profile)
    res.render('display/send', { profile });
})




app.get('/add', (req, res) => {
    res.render('Methods/add');
})

app.post('/add', async (req, res) => {
    const newprofile = new Profile(req.body);
    await newprofile.save();
    const profile = newprofile;
    res.render('display/send', { profile });
})

app.get('/students/:id/update', async (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const profile = await Profile.findById(id);
    // console.log(profile);
    res.render('Methods/update', { profile });
})

app.put('/students/:id', async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const profile = await Profile.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/students/${profile._id}`)
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



