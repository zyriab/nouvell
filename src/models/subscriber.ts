import mongoose from 'mongoose';
import { productSchema } from './product';
import { occupationSchema } from './occupation';

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    occupation: {
      type: occupationSchema,
      required: true,
    },
    products: {
      type: [productSchema],
      required: true,
    },
    language: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const Subscriber = mongoose.model('Subscriber', subscriberSchema);
export default Subscriber;
