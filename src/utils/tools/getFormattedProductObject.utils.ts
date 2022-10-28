import { Product } from '../../definitions/generated/graphql';

// TODO: add a function to get the proper product name, category and displayName from the DB and use this one only for adding products
export default function getFormattedProductObject(product: Product) {
  return {
    name: product.name.toLowerCase(),
    category: product.category,
    displayName:
      product.displayName != null ? product.displayName : product.name,
  };
}
