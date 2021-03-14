// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('views'));

// use res.render to load up an ejs view file

// LP
app.get('/', function(req, res) {
    res.render('landingPage');
});

// index page
app.get('/beranda', function(req, res) {
    res.render('beranda');
});

// see answers page
app.get('/jawab', function(req, res) {
    res.render('lihatPertanyaan');
});

// about page
app.get('/tentang', function(req, res) {
    res.render('about');
});

// berlangganan page
app.get('/berlangganan', function(req, res) {
    res.render('berlangganan');
});

// detail price page
app.get('/harga', function(req, res) {
    res.render('pembayaran');
});

// make forum page
app.get('/forum', function(req, res) {
    res.render('forum');
});

// make question page
app.get('/buat-pertanyaan', function(req, res) {
    res.render('pertanyaan');
});

// Jawab page
app.get('/jawab-pertanyaan', function(req, res) {
    res.render('commentPertanyaan');
});

// login page
app.get('/masuk', function(req, res) {
    res.render('login');
});

// registration page
app.get('/daftar', function(req, res) {
    res.render('regis');
});

// profile page
app.get('/profil', function(req, res) {
    res.render('profil');
});

// edit-profil page
app.get('/edit-profil', function(req, res) {
    res.render('edit-profil');
});

// setting subscribtion page
app.get('/setelan-berlangganan', function(req, res) {
    res.render('setelan-berlangganan');
});

// change password page
app.get('/setelan-ganti-password', function(req, res) {
    res.render('setelan-editPassword');
});

// no result page
app.get('/no-result', function(req, res) {
    res.render('noResult');
});

// search before login
app.get('/no-result', function(req, res) {
    res.render('searchResultNoLogin');
});

app.listen(8080);
console.log('http://localhost:8080/');