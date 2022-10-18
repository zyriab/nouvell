import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
});

const Language = mongoose.model('Language', languageSchema);
export default Language;
