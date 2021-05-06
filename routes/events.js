/*
    url: /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { veryfyToken } = require('../middlewares/verify-token');
const { validate } = require('../middlewares/validate-body');
const { validatorIsDate } = require('../helpers/validatorIsDate');

const router = Router();
router.use( veryfyToken );

router.get('/',
    getEvents
);
router.post('/',
    [
        check('title', 'The title is required').not().isEmpty(),
        check('start', 'The start date is required and must be a date').custom( validatorIsDate ),
        check('end', 'The end date is required and must be a date').custom( validatorIsDate ),
        validate
    ],
    createEvent
);
router.put('/:id',
    updateEvent
);
router.delete('/:id',
    deleteEvent
);

module.exports = router;
