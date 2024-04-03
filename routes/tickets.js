const express = require('express')
const router = express.Router()

const ticketCtrl = require('../controllers/tickets');


router.get('/tickets/:id/new', ticketCtrl.new);
router.post('/tickets/add', ticketCtrl.addNewTicket);
router.delete('/tickets/:id', ticketCtrl.delete)


module.exports = router;