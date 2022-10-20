import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { RequestBody, ResponseBody } from '../definitions/custom';
import { AccessToken } from '../definitions/auth';
import getIssuerUrl from '../utils/auth/getIssuerUrl.utils';

let AUTH0_ISSUER = '';

function getKey(header: any, callback: (a: any, key: any) => any) {
  const client = jwksClient({
    jwksUri: `${AUTH0_ISSUER}.well-known/jwks.json`,
  });

  client.getSigningKey(header.kid, (e, key: any) => {
    const signingKey: jwksClient.SigningKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

// eslint-disable-next-line consistent-return
export default async function checkAuth(
  req: RequestBody,
  res: ResponseBody<any>,
  next: () => void
) {
  try {
    console.log('Checking auth...');

    let decodedToken: AccessToken;
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      req.body.isAuth = false;
      return next();
    }

    const token: string = authHeader.split(' ')[1];
    if (!token || token === '') {
      req.body.isAuth = false;
      return next();
    }

    AUTH0_ISSUER = `https://${getIssuerUrl(authHeader.split(' ')[2])}/`;

    try {
      decodedToken = await new Promise((resolve) => {
        jwt.verify(
          token,
          getKey,
          {
            audience: process.env.AUTH0_AUDIENCE,
            issuer: AUTH0_ISSUER,
            algorithms: ['RS256'],
          },
          (error: any, decoded: any) => {
            if (error) {
              resolve({ error });
            }
            if (decoded) {
              resolve({ decoded });
            }
          }
        );
      });
    } catch (err) {
      req.body.isAuth = false;
      return next();
    }

    if (!decodedToken) {
      req.body.isAuth = false;
      return next();
    }

    if (decodedToken.error) {
      req.body.isAuth = false;
      res.status(401);
      return next();
    }

    req.body.isAuth = true;
    req.body.token = decodedToken.decoded!;

    next();
  } catch (err) {
    req.body.isAuth = false;
    res.status(500);
    return next();
  }
}
