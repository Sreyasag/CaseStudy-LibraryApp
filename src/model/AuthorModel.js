const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sreyas:<password>@cluster0.4jbvf.mongodb.net/Library',{useNewUrlParser:true});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;