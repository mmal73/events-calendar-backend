

const getEvents = ( req, res ) => {
    return res.json({
        status: true,
        msg: 'getEvents'
    });
}
const createEvent = ( req, res ) => {
    return res.json({
        status: true,
        msg: 'createEvent'
    });
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