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
  req.method = reqCache.method;
  next();
}
