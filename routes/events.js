/*
    url: /api/events
*/

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { veryfyToken } = require('../middlewares/verify-token');

const router = Router();
router.use( veryfyToken );

router.get('/',
    getEvents
);
router.post('/',
    createEvent
);
router.put('/:id',
    updateEvent
);
router.delete('/:id',
    deleteEvent
);

module.exports = router;
