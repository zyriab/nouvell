import { Product as ProductModel } from '../../models/models';
import { Product } from '../../definitions/generated/graphql';

export default async function isProductExisting(product: Product) {
  return (
    (await ProductModel.exists({ name: product.name.toLowerCase() })) != null
  );
}
