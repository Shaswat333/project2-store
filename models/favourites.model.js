const {Schema,model} = require('mongoose');

const favouriteSchema = new Schema(
    {
        nameOfStore: String,
        description: String,
        rating: Number
    },
    { timestamp: true}
);

const favourite= model('favourite',favouriteSchema);

module.exports= favourite;