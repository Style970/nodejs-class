const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
    //ye wahi name dena hai jo postman main hoga
}).single('file_name');

app.post("/upload", upload, (req, resp) => {
    resp.send("file uploaded...")
});

//uploads folder bana ke run karna

app.listen(5000)
