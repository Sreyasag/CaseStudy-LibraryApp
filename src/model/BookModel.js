const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sreyas:<password>@cluster0.4jbvf.mongodb.net/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;