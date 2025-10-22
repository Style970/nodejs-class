const express = require('express');
const reqFilter = require('./middileware');

const app = express();
const route = express.Router();
// ye hai route lavel middileware
route.use(reqFilter);

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});

// jis jis main middileware use karna hai uske aage route laga den
route.get('/about', (res, resp) => {
    resp.send('Welcome to about page')
});

route.get('/contact', (res, resp) => {
    resp.send('Welcome to contact us page')
});

app.use('/', route);
app.listen(5000)