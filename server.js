const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

// function to connect MongoDB with node application
async function connectDatabase(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/school');
        app.listen(3000, ()=> {
            console.log('server is running');
        });
    } catch(err) {
        handleError(err);
    }
}
connectDatabase();