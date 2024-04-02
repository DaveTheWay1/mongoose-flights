const Flight = require('../models/flight')

module.exports = {
    index,
    new:newFlight,
    create,
    show
}

async function index(req,res){
    const flights = await Flight.find({});
    res.render('flights', {flights})
}

async function newFlight(req,res){
    res.render('flights/new')
}

async function create(req,res){
    console.log(req.body)
    await Flight.create(req.body);
    res.redirect('/flights')
}

async function show(req,res){
    console.log(req.params.id);
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {flight})
}