import { Product } from '../../definitions/generated/graphql';

export default function getFormattedProductObject(product: Product) {
  return {
    name: product.name.toLowerCase(),
    category: product.category,
    displayName:
      product.displayName != null ? product.displayName : product.name,
  };
}
