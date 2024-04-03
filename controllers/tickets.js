const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports={
    new:newTicket,
    addNewTicket,
    delete:deleteTicket
}

async function newTicket(req,res){
    const flight = await Flight.findById(req.params.id)
    res.render('tickets/new', {flight})
}

async function addNewTicket(req,res){
    try {
        console.log(req.body)
        const { seat, price, flight } = req.body;
        const ticket = new Ticket({ seat, price, flight });
        await ticket.save();
        console.log(ticket)
        console.log('here')
        res.redirect(`/flights/${flight}`)
    } catch (error) {
        console.log(error);
    }
}

async function deleteTicket(req,res){
    const ticket = await Ticket.findByIdAndDelete(req.params.id)
    const flight_id = ticket.flight
    res.redirect(`/flights/${flight_id}`)
}



