import mongoose from 'mongoose';
import emailDataSchema from '../helpers/emailDataSchema.help';
import { productSchema } from './product';
import { occupationSchema } from './occupation';

const emailTemplateSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  data: {
    type: emailDataSchema,
    required: true,
  },
  occupation: {
    type: occupationSchema,
    default: '',
  },
  products: {
    type: [productSchema],
    default: [],
  },
  language: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const EmailTemplate = mongoose.model('EmailTemplate', emailTemplateSchema);
export default EmailTemplate;
