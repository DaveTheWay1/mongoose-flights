const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ticketSchema = require('../models/ticket').schema;

const destinationSchema = new Schema({
    airport:{type:String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: {type:Date}
}, {timestamps:true})

const flightScehma = new Schema({
    airline:{type:String, required:true, enum:['American', 'Southwest', 'United']},
    airport:{type:String, required:true, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default:'DEN'},
    flightNo:{type:Number, required:true, min:10, max:9999},
    departs:{type:Date, 
        default: function () {
            return new Date().getFullYear() + 1;
        }},
    destinations:[destinationSchema],
    tickets:[ticketSchema]
}, {timestamps:true});
module.exports = mongoose.model('Flight', flightScehma);