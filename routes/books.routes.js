const router = require('express').Router();
const Book = require('../models/Book.model');
const axios = require('axios');
axios.defaults.headers.common['x-api-key'] = process.env.API_KEY;

//Search get route
apiKey = 'AIzaSyAwMsexndvF71mk8XWHm5Mg44DHfyJXRlY';
router.get('/searched-book', (req, res, next) => {
    const { searchTerm } = req.query;
    axios
        .get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm)
        .then((responseFromAPI) => {
            console.log({info: responseFromAPI.data.items[0].volumeInfo})
            // imageLinks: {thumbnail}
            const { title, authors, description } =
                responseFromAPI.data.items[0].volumeInfo;
            // console.log({ title, authors, description })

            const bookData = { title, authors, description };

            res.render('books/searched-book', { bookData });
        })
        .catch((err) => console.error(err));
});

///books/my-books/{{bookData.title}}
router.post('/my-books/:title/:authors', (req, res, next) => {
    console.log(req.params.title, req.params.authors);

    //current user favorites

    res.redirect('/books/my-books');
});

//My books get route
router.get('/my-books', (req, res, next) => {
    res.render('books/my-books');
});
module.exports = router;
