import { Product as ProductModel } from '../../models/models';
import { Product } from '../../definitions/types';

export default async function getProduct(name: string): Promise<Product> {
  const product = await ProductModel.findOne({ name: name.toLowerCase() });

  if (product == null) {
    throw new Error(`Product ${name} not found`);
  }

  return {
    name: product.name,
    category: product.category,
    displayName: product.displayName,
  };
}
