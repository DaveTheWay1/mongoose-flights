const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightScehma = new Schema({
    airline:{type:String, required:true, enum:['American', 'Southwest', 'United']},
    airport:{type:String, required:true, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default:'DEN'},
    flightNo:{type:Number, required:true, min:10, max:9999},
    departs:{type:Date, 
        default: function () {
            return new Date().getFullYear();
        }}
});

module.exports = mongoose.model('Movie', flightScehma);