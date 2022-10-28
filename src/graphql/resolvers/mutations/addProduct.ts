import { RequestBody } from '../../../definitions/custom';
import {
  ProductCreationInput,
  ProductResult,
} from '../../../definitions/generated/graphql';
import { GqlError } from '../../../definitions/types';
import { Product } from '../../../models/models';
import { checkRequestIsAuthed } from '../../../utils/auth.utils';
import {
  getFormattedProductObject,
  handleErrorResponse,
} from '../../../utils/tools.utils';

export default async function addProduct(
  args: { productInput: ProductCreationInput },
  req: RequestBody
): Promise<ProductResult | GqlError> {
  try {
    const [authed, authError] = checkRequestIsAuthed(req);
    
    if (!authed) {
      return authError!;
    }

    const params = getFormattedProductObject(args.productInput);

    const product = await Product.findOne({
      name: params.name,
    });

    if (product == null) {
      await Product.create(params);
    }

    return {
      __typename: 'Product',
      ...params,
    };
  } catch (e) {
    return handleErrorResponse(e as Error);
  }
}
