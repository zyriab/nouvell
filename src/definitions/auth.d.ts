export interface AccessToken {
  decoded?: DecodedToken;
  error?: SignError;
}

export interface DecodedToken extends AuthMetadata {
  aud: string[];
  azp: string;
  exp: number;
  iat: number;
  iss: string;
  scope: string;
  sub: string;
}

export interface AppMetadata {
  tenant?: string;
}

interface AuthMetadata {
  [key: string]: string | string[] | any;
}

interface SignError {
  message: string;
  name: string;
  stack: string;
}
