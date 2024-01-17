const  mongoose = require('mongoose');


mongoose.connect("link");

const cardSchema = mongoose.Schema({
    name : String,
    description : String,
    src : String,
    interest : Array,
    tinder : String,
    bumble :String
})

const card = mongoose.model('card' , cardSchema )

module.exports = {
    card
}