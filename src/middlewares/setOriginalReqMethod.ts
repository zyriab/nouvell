/* eslint-disable no-console */
import { RequestBody, ResponseBody } from '../definitions/custom';
import reqCache from '../utils/fixes/reqCache.utils';

/**
 * Hotfix for a bug with aws-serverless-express proxy transforming all request into GET reqs
 */
export default function setOriginalReqMethod(
  req: RequestBody,
  res: ResponseBody<any>,
  next: () => void
) {
  console.log(`Setting request method ${req.method} to ${reqCache.method}`);

  req.method = reqCache.method;
  next();
}
