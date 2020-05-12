const express = require('express'), exhbs = require('express-handlebars'), path = require('path');
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/test";

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const users = [
//     {
//         username: '11',
//         password: '11',
//         user_id: 0
//     },
//     {
//         username: '22',
//         password: '22',
//         user_id: 1
//     },
// ];
// const houses = [
//     {
//         town: 'Томашівка',
//         volume: '456',
//         price: '456',
//         street: 'молодежная 2',
//         house_id: 0
//     },
//     {
//         town: 'Львов',
//         volume: '456',
//         price: '456',
//         street: 'Академика Лазаренка 40а',
//         house_id: 1
//     }
//
// ];
// let id = 0;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'static')));

// app.engine('.hbs', exhbs({extname: '.hbs', defaultLayout: null}));
//
// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'static'));
//
// app.get('/', (res, req) => req.render('main'));
// app.get('/gethouse', (req, res) => res.render('gethouse'));
// app.get('/houses', (req, res) => res.json(houses));
//
// app.get('/login', (req, res) => {
//     res.render('login')
// })
// app.post('/login', (req, res) => {
//     let body = req.body;
//     console.log(body);
//     const log = users.find(id => {
//         console.log(id);
//         return id.username === body.username && id.password === body.password
//     });
//
//     console.log(log, 22);
//
//     res.redirect(`/user/${log.user_id}`);
// });
//
// app.post('/user', (res, req) => {
//
// });
//
// app.post('/register', (res, req) => {
//
//     let body = res.body;
//     users.push(body);
//     body.user_id = users.length;
//     console.log(body);
//     req.render('register')
//
// });
//
// app.get('/users', (res, req) => {
//     req.json(users)
// });
//
// app.get(`/house`, (res, req) => {
//
//     req.render('house');
//
// });
//
// app.post(`/house`, (res, req) => {
//     let body = res.body;
//     body.house_id = houses.length;
//     console.log(body);
//     houses.push(body);
//     req.render('house');
// });
//
// app.get(`/user/:user_id`, (req, res) => {
//     console.log(req.params.user_id);
//     res.json(users[req.params.user_id])
// });
//
// app.get(`/house/:house_id`, (req, res) => {
//     res.json(houses[req.params.house_id])
// });


const mongoose = require("mongoose");
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send('22')
})

app.use('/api/users', require('./routes/user'));

app.listen(3000, () => {
    console.log(3000);
});
