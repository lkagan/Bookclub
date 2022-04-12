const router = require("express").Router();
const Book = require("../models/Book.model");
const axios = require("axios");
axios.defaults.headers.common['x-api-key'] = process.env.API_KEY;

// const search = { searchTerm }; 
// let query = search.value;
apiKey = "AIzaSyAwMsexndvF71mk8XWHm5Mg44DHfyJXRlY"
router.get("/all-books", (req, res, next) => {
    const { searchTerm } = req.query;
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ searchTerm)
    .then(responseFromAPI => {
        console.log({info: responseFromAPI.data.items[0].volumeInfo})
        // imageLinks: {thumbnail}
        const { title, authors, description } = responseFromAPI.data.items[0].volumeInfo;
        console.log({ title, authors, description })

        const dataToShowToUsers = { title, authors, description }
        
        res.render("books/all-books", {dataToShowToUsers})
    })
    .catch(err => console.error(err))
}); 

module.exports = router;