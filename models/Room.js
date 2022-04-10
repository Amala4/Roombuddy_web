const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({

  room_address_and_description: {
    type: String
  },
  about_me: {
    type: String
  },
  room_rent: {
    type: String
  },
  roommate_rent: {
    type: String
  },
  gender: {
    type: String
  },
  state: {
    type: String
  },
  campus: {
    type: String
  },
  samenumber: {
    type: String
  },
  post_number: {
    type: String
  },
  poster_phonenumber: {
    type: String
  },
  kind_of_person: {
    type: String
  },
  poster_fullName: {
    type: String
  },
  time: {
    type: String
  },
  user_id: {
    type: String
  }
});

module.exports = Room = mongoose.model('room_Detail', RoomSchema);