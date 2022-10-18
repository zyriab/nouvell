import { Product as ProductModel } from '../../models/models';
import { Product } from '../../definitions/generated/graphql';

export default async function getAllProductsFromCategory(
  category: string
): Promise<Product[]> {
  const products = await ProductModel.find({ category });

  return products.map((p) => ({
    name: p.name,
    category: p.category,
    displayName: p.displayName,
  }));
}
