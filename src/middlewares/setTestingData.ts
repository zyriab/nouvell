import { RequestBody, ResponseBody } from '../definitions/custom';

export default function setTestingData(
  req: RequestBody,
  res: ResponseBody<any>,
  next: () => void
) {
  req.body.isAuth = true;
  req.body.username = 'test-user';
  req.body.userEmail = 'test-user@example.com';
  req.body.userId = '1234abcd';

  next();
}
