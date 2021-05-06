const CalendarEvent = require('../models/CalendarEvent');

const getEvents = async( req, res ) => {
    const events = await CalendarEvent.find().populate('user', 'name');
    return res.json({
        status: true,
        events
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
const updateEvent = async( req, res ) => {
    
    const eventId = req.params.id;
    const userId = req._id

    try {
        const event = await CalendarEvent.findById(eventId);
        if( !event ){
            return res.status(404).json({
                status: false,
                message: 'Event not found'
            });
        }
        if(event.user.toString() !== userId){
            return res.status(401).json({
                status: false,
                message: "You cannot edit this event"
            });
        }
        const newEvent = {
            ...req.body,
            user: userId
        }

        const eventUpdated = await CalendarEvent.findByIdAndUpdate( eventId, newEvent, {
            new: true
        });

        return res.json({
            status: true,
            event: eventUpdated
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'An error has ocurred'
        });
    }

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