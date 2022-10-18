import mongoose from 'mongoose';

const emailDataSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  textBody: {
    type: String,
  },
  htmlBody: {
    type: String,
  },
  ampBody: {
    type: String,
  },
});

export default emailDataSchema;
