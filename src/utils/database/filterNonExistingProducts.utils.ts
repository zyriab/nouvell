import { Product } from '../../definitions/types';
import { Product as ProductModel } from '../../models/models';
import isProductExisting from './isProductExisting.utils';
import { ProductInput } from '../../definitions/generated/graphql';

export default async function filterNonExistingProducts(
  prodsArr: ProductInput[]
): Promise<Product[]> {
  const prodsExist: boolean[] = await Promise.all(
    prodsArr.map((p) => isProductExisting(p))
  );

  let filteredProds = prodsArr.filter((p, i) => prodsExist[i]);

  if (filteredProds.length === 0) {
    throw new Error('No products left after filtering non-existing ones!');
  }

  let tmpProd: Product;
  let tmpDoc: Product;

  filteredProds = await Promise.all(
    filteredProds.map(async (p) => {
      tmpProd = { ...p, category: '', displayName: '' };
      tmpDoc = (await ProductModel.findOne({ name: p.name }))!;

      tmpProd.category = tmpDoc.category;
      tmpProd.displayName = tmpDoc.displayName;

      return tmpProd;
    })
  );

  return <Product[]>filteredProds;
}
