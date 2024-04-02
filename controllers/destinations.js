const Flight = require('../models/flight');

module.exports = {
    create
}

async function create(req,res){
    try {
        console.log('here')
        const flight = await Flight.findById(req.params.id);
        flight.destinations.push(req.body);
        console.log(flight)
        await flight.save();
        console.log('here again')
        res.redirect(`/flights/${req.params.id}`)
    } catch (error) {
        console.log(error);
        res.render('error', {error});
    }
}