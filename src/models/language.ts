import mongoose from 'mongoose';
import { Language as TLanguage } from '../definitions/types';

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
});

const Language = mongoose.model<TLanguage>('Language', languageSchema);
export default Language;
