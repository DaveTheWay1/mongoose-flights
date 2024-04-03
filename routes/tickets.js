const express = require('express')
const router = express.Router()

const ticketCtrl = require('../controllers/tickets');


router.post('/flights/:id/tickets', ticketCtrl.addTicket);
router.get('/flights/:id/tickets', ticketCtrl.new);


module.exports = router;