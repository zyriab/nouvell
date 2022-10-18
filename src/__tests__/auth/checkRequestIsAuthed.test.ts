/* eslint-disable no-underscore-dangle */
import checkRequestIsAuthed from '../../utils/auth/checkRequestIsAuthed.utils';
import mockReq from '../../helpers/mockRequest.help';
import { RequestBody } from '../../definitions/custom';
import 'dotenv/config';

beforeAll(() => {
  process.env.TEST_AUTH = 'true';
});

afterAll(() => {
  process.env.TEST_AUTH = 'false';
});

test('Should resolve as authenticated', () => {
  const req = { ...mockReq } as RequestBody;

  const [authed, gqlerror] = checkRequestIsAuthed(req);
  expect(authed).toBe(true);
  expect(gqlerror).toBeUndefined();
});

test('Should resolve as NOT authenticated', () => {
  const req = { ...mockReq } as RequestBody;
  req.body.isAuth = false;

  const [authed, gqlerror] = checkRequestIsAuthed(req);
  expect(authed).toBe(false);
  expect(gqlerror!.__typename).toBe('Unauthenticated');
});
