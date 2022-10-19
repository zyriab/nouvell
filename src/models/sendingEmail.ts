import mongoose from 'mongoose';
import { productSchema } from './product';
import { occupationSchema } from './occupation';

const sendingEmailSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  occupations: {
    type: [occupationSchema],
  },
  products: {
    type: [productSchema],
  },
  languages: {
    type: [String],
    lowercase: true,
    required: true,
  },
  host: {
    type: String,
    required: true,
    lowercase: true,
  },
  port: {
    type: Number,
    required: true,
  },
  secure: {
    type: Boolean,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const SendingEmail = mongoose.model('SendingEmail', sendingEmailSchema);
export default SendingEmail;
