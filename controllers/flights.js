const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

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
    // console.log(req.params.id);
    try {
        const flight = await Flight.findById(req.params.id);
        const tickets = await Ticket.find({flight:flight._id});
        res.render('flights/show', {flight, tickets});
    } catch (error) {
        console.log(error)
    }
}