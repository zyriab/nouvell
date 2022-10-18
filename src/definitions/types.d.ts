export type GqlError = { __typename: string; message: string; stack?: string };

export type Product = { name: string; category: string; displayName: string };

export type Occupation = { name: string; displayName: string };
