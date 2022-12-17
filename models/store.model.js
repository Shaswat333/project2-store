const {Schema,model} = require('mongoose');

const storeSchema = new Schema(
    {
        nameOfStore: String,
        description: String,
        owner: String,
        location: String,
        rating: Number  
    },
    { timestamp: true}
);

const Store= model('Store',storeSchema);

module.exports= Store;