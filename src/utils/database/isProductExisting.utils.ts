import { Product } from '../../models/models';
import { ProductInput } from '../../definitions/generated/graphql';

export default async function isProductExisting(product: ProductInput) {
  return (
    (await Product.exists({ name: product.name.toLowerCase() })) != null
  );
}
