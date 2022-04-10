const express = require('express');
const router = express.Router();

// Load Room model
const Room_Details = require('../../models/Room');

// @route GET api/rooms/test
// @description tests rooms route
// @access Public
router.get('/test', (req, res) => res.send('room route testing!'));

// @route GET api/Room_Details
// @description Get all Rooms
// @access Public
router.get('/', (req, res) => {
  Room_Details.find()
    .then(room => res.json(room))
    .catch(err => res.status(404).json({ noroomsfound: 'No Rooms found' }));
});

// @route GET api/rooms/:id
// @description Get single room by id
// @access Public
router.get('/:id', (req, res) => {
  Room_Details.findById(req.params.id)
    .then(room => res.json(room))
    .catch(err => res.status(404).json({ noroomsfound: 'No Rooms found' }));
});

// @route GET api/rooms
// @description add/save room
// @access Public
router.post('/', (req, res) => {
  Room_Details.create(req.body)
    .then(room => res.json({ msg: 'Room added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this room' }));
});

// @route GET api/rooms/:id
// @description Update room
// @access Public
router.put('/:id', (req, res) => {
  Room_Details.findByIdAndUpdate(req.params.id, req.body)
    .then(room => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/rooms/:id
// @description Delete Room by id
// @access Public
router.delete('/:id', (req, res) => {
  Room_Details.findByIdAndRemove(req.params.id, req.body)
    .then(room => res.json({ mgs: 'Room entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Room' }));
});

module.exports = router;