const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sreyas:112358@cluster0.4jbvf.mongodb.net/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;