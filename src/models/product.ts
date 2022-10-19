import mongoose from 'mongoose';
import { Product as TProduct } from '../definitions/types';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model<TProduct>('Product', productSchema);
export { productSchema };
export default Product;
