const  mongoose = require('mongoose');

mongoose.connect("mongodb+srv://paritoshshukla:Mummypapa14@cluster0.bplsj6n.mongodb.net/businessCard");

const cardSchema = mongoose.Schema({
    name : String,
    description : String,
    src : String,
    interest : Array
})

const card = mongoose.model('card' , cardSchema )

module.exports = {
    card
}