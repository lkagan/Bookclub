const {Schema, model} = require("mongoose");

const bookclubSchema = new Schema({
    name: String,
    description: String,
    book: String,
},
{
    timestamps: true
}
);

module.exports = model("Bookclub", bookclubSchema); 