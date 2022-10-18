import { Product } from '../../models/models';

export default async function getAllProducts(): Promise<string[]> {
  const products = await Product.find({});
  return products.map((p) => p.name);
}
