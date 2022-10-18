import { Product } from '../../definitions/generated/graphql';
import isProductExisting from './isProductExisting.utils';

export default async function filterNonExistingProducts(prodsArr: Product[]) {
  const prodsExist: boolean[] = await Promise.all(
    prodsArr.map((p) => isProductExisting(p))
  );

  const filteredProds = prodsArr.filter((p, i) => prodsExist[i]);

  if (filteredProds.length === 0) {
    throw new Error('No products left after filtering non-existing ones!');
  }

  return filteredProds;
}
