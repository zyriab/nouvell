import { Product } from '../../definitions/generated/graphql';

export default function getUpdatedSubscriberProducts(
  subscriberProducts: Product[],
  newProducts: Product[]
) {
  return [...new Set(subscriberProducts.concat(newProducts))];
}
