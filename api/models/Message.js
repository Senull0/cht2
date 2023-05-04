const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  recipient: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  text: String,
  file: String,
  time: {type: Date, default: Date.now},
}, {timestamps:true});

MessageSchema.virtual('localTime').get(function() {
  return this.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});
const MessageModel = mongoose.model('Message', MessageSchema);


module.exports = MessageModel;