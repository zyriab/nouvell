/* eslint-disable no-console */
import { RequestBody, ResponseBody } from '../definitions/custom';
import {
  getUserId,
  getUserEmail,
  getTenant,
  getUsername,
} from '../utils/auth.utils';

// eslint-disable-next-line consistent-return
export default async function setReqMetadata(
  req: RequestBody,
  res: ResponseBody<any>,
  next: () => void
) {
  try {
    console.log('Setting request metadata...');

    if (!req.body.isAuth) {
      return next();
    }

    const tkn = req.body.token;
    const tenant = getTenant(tkn);

    if (!tenant) {
      req.body.isAuth = false;
      return next();
    }

    const email = getUserEmail(tkn);

    if (!email) {
      req.body.isAuth = false;
      return next();
    }

    const username = getUsername(tkn);

    if (!username) {
      req.body.isAuth = false;
      return next();
    }

    req.body.tenant = tenant!;
    req.body.username = username! as string;
    req.body.userEmail = email! as string;
    req.body.userId = getUserId(tkn);

    next();
  } catch (err) {
    req.body.isAuth = false;
    next();
  }
}
