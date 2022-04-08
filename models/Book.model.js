const { Schema, model } = require("mongoose");

const bookSchema = new Schema( 
    {
        name: String, 
        genre: String,
        plot: String
    }, 
    {
        timestamps: true
    }
)

module.exports = model("Book", bookSchema); 