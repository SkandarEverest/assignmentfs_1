const express = require('express');
const data = require('./data/book');

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/books', (req,res) => {
    // res.send('Hello World');
    res.render('booklist', {data});
})

app.get('/books/:id', (req,res) => {
    let bookid = req.params.id;
    let book_details = data.find(x => x.id == bookid);

    res.send(book_details);
})

app.listen(port,() => {
    console.log(`listening at http://localhost:${port}`);
})
