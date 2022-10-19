import mongoose from 'mongoose';
import emailDataSchema from '../helpers/emailDataSchema.help';
import { productSchema } from './product';
import { occupationSchema } from './occupation';
import { EmailTemplate as TEmailTemplate } from '../definitions/types';

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
  },
  language: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const EmailTemplate = mongoose.model<TEmailTemplate>(
  'EmailTemplate',
  emailTemplateSchema
);
export default EmailTemplate;
