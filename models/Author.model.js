const { Schema, model } = require("mongoose");

const authorSchema = new Schema( 
    {
        name: String,
        details: String
    }, 
    {
        timestamps: true
    }
)

module.exports = model("Author", authorSchema); 