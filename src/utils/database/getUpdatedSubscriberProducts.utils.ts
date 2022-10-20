import { Product } from '../../definitions/generated/graphql';

export default function getUpdatedSubscriberProducts(
  subscriberProducts: Product[],
  newProducts: Product[]
) {
  const result: Product[] = [];

  for (const p of subscriberProducts) {
    result.concat(
      newProducts.filter((x) => x.name.toLowerCase() !== p.name.toLowerCase())
    );
  }

  return result;
}
