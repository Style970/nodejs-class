const express = require('express');
const app = express();
// middilware
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age in url")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}
// ye hai app lavel middileware ye har page main apply ho jaega
app.use(reqFilter);

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});
app.listen(5000)