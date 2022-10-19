export type GqlError = { __typename: string; message: string; stack?: string };

export type Product = { name: string; category: string; displayName: string };

export type Occupation = { name: string; displayName: string };

export type Language = { name: string };

export type Subscriber = {
  email: string;
  occupation: Occupation;
  products: Product[];
  language: string;
};

export type EmailData = {
  subject: string;
  textBody?: string;
  htmlBody?: string;
  ampBody?: string;
};

export type EmailTemplate = {
  type: string;
  data: EmailData;
  occupation?: Occupation;
  products?: Product[];
  language: string;
};

export type SendingEmail = {
  displayName: string;
  type: string;
  email: string;
  occupations?: Occupation[];
  products?: Product[];
  languages: string[];
  host: string;
  port: number;
  secure: boolean;
  pass: string;
};
