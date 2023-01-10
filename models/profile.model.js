const {Schema, model } = require('mongoose');

const profileSchema= new Schema(
    {
        nameOfStore: String,
        minpriceOfStore: Number,
        maxpriceOfStore: Number,
        typeOfStore: String,
        rent: Number,
        number: Number,
        gmail: String,
        location: String,
        owner: String,
        category: String,
        picture_url: {
            type: String,
            default: 
            'cart.png'
        },
        
    }  
);
const Author = model('profile', authorSchema);
module.exports= profile