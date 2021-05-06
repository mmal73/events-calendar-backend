const CalendarEvent = require('../models/CalendarEvent');

const getEvents = ( req, res ) => {
    return res.json({
        status: true,
        msg: 'getEvents'
    });
}
const createEvent = async( req, res ) => {

    const newEvent = new CalendarEvent( req.body );

    try {
        // Get user ref
        newEvent.user = req._id;
        
        const eventSaved = await newEvent.save();
        return res.status(500).json({
            status: true,
            event: eventSaved
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'An error has ocurred'
        });
    }
    
}
const updateEvent = ( req, res ) => {
    return res.json({
        status: true,
        msg: 'updateEvent'
    });
}
const deleteEvent = ( req, res ) => {
    return res.json({
        status: true,
        msg: 'deleteEvent'
    });
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
}