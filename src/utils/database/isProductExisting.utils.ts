import { Product as ProductModel } from '../../models/models';
import { Product, ProductInput } from '../../definitions/generated/graphql';

export default async function isProductExisting(product: ProductInput) {
  return (
    (await ProductModel.exists({ name: product.name.toLowerCase() })) != null
  );
}
