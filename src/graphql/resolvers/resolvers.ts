import {
  addSubscriber,
  editSubscriber,
  removeSubscriber,
  addProduct,
} from './mutations';

const gqlResolvers = {
  /* MUTATIONS */
  addSubscriber,
  removeSubscriber,
  editSubscriber,
  addProduct,
};

export default gqlResolvers;
