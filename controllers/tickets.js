const Flight = require('../models/flight');

module.exports={
    addTicket,
    new:newTicket
}

async function newTicket(req,res){
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', {flight})
}

async function addTicket(req,res){
    console.log('here')
    console.log(req.body)
    const flight = await Flight.findById(req.params.id);
    flight.tickets.push(req.body);
    await flight.save()
    res.redirect(`/flights/${flight.id}`)
}