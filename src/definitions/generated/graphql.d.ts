import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthDataInput = {
  pass: Scalars['String'];
  user: Scalars['String'];
};

export type EditEmailTemplateInput = {
  data?: InputMaybe<EmailDataInput>;
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<OccupationInput>;
  products?: InputMaybe<Array<ProductInput>>;
  type: Scalars['String'];
};

export type EditSendingEmailInput = {
  auth?: InputMaybe<AuthDataInput>;
  displayName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  host?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<OccupationInput>;
  port?: InputMaybe<Scalars['Int']>;
  products?: InputMaybe<Array<ProductInput>>;
  secure?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type EditSubscriberInput = {
  email: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<OccupationInput>;
  products?: InputMaybe<Array<ProductInput>>;
};

/** Represents the content and title of a newsletter email */
export type EmailData = {
  __typename?: 'EmailData';
  ampBody?: Maybe<Scalars['String']>;
  htmlBody?: Maybe<Scalars['String']>;
  subject: Scalars['String'];
  textBody?: Maybe<Scalars['String']>;
};

export type EmailDataInput = {
  ampBody?: InputMaybe<Scalars['String']>;
  htmlBody?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
  textBody?: InputMaybe<Scalars['String']>;
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  data: EmailData;
  language: Scalars['String'];
  occupation?: Maybe<Occupation>;
  products?: Maybe<Array<Product>>;
  type: Scalars['String'];
};

export type EmailTemplateInput = {
  data: EmailDataInput;
  language: Scalars['String'];
  occupation?: InputMaybe<OccupationInput>;
  products?: InputMaybe<Array<ProductInput>>;
  type: Scalars['String'];
};

export type EmailTemplateResult = EmailTemplate | ServerError | Unauthenticated;

export type EmailTemplates = {
  __typename?: 'EmailTemplates';
  emailTemplates: Array<Maybe<EmailTemplates>>;
};

export type EmailTemplatesResult = EmailTemplates | ServerError | Unauthenticated;

/** INPUT TYPES */
export type InputData = {
  email?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  maxNumber?: InputMaybe<Scalars['Int']>;
  occupation?: InputMaybe<OccupationInput>;
  products?: InputMaybe<Array<ProductInput>>;
};

export type Language = {
  __typename?: 'Language';
  name: Scalars['String'];
};

export type LanguageResult = Language | ServerError | Unauthenticated;

export type Languages = {
  __typename?: 'Languages';
  languages: Array<Language>;
};

export type LanguagesResult = Languages | ServerError | Unauthenticated;

export type Mutations = {
  __typename?: 'Mutations';
  addEmailTemplate?: Maybe<EmailTemplateResult>;
  addLanguage?: Maybe<LanguageResult>;
  addOccupation?: Maybe<OccupationResult>;
  addProduct?: Maybe<ProductResult>;
  addSendingEmail?: Maybe<SendingEmailResult>;
  addSubscriber?: Maybe<SubscriberResult>;
  editEmailTemplate?: Maybe<EmailTemplateResult>;
  editSendingEmail?: Maybe<SendingEmailResult>;
  editSubscriber?: Maybe<SubscriberResult>;
  removeEmailTemplate?: Maybe<EmailTemplateResult>;
  removeLanguage?: Maybe<LanguageResult>;
  removeOccupation?: Maybe<OccupationResult>;
  removeProduct?: Maybe<ProductResult>;
  removeSendingEmail?: Maybe<SendingEmailResult>;
  removeSubscriber?: Maybe<SubscriberResult>;
  sendEmail?: Maybe<SentEmailResult>;
};


export type MutationsAddEmailTemplateArgs = {
  emailTemplateInput?: InputMaybe<EmailTemplateInput>;
};


export type MutationsAddLanguageArgs = {
  languageInput: Scalars['String'];
};


export type MutationsAddOccupationArgs = {
  occupationInput: OccupationInput;
};


export type MutationsAddProductArgs = {
  productInput: ProductInput;
};


export type MutationsAddSendingEmailArgs = {
  sendingEmailInput: SendingEmailInput;
};


export type MutationsAddSubscriberArgs = {
  subscriberInput: SubscriberInput;
};


export type MutationsEditEmailTemplateArgs = {
  editEmailTemplateInput?: InputMaybe<EditEmailTemplateInput>;
};


export type MutationsEditSendingEmailArgs = {
  sendingEmailInput: SendingEmailInput;
};


export type MutationsEditSubscriberArgs = {
  editSubscriberInput: EditSubscriberInput;
};


export type MutationsRemoveEmailTemplateArgs = {
  emailTemplateInput?: InputMaybe<EmailTemplateInput>;
};


export type MutationsRemoveLanguageArgs = {
  languageInput: Scalars['String'];
};


export type MutationsRemoveOccupationArgs = {
  occupationInput: OccupationInput;
};


export type MutationsRemoveProductArgs = {
  nameInput: Scalars['String'];
};


export type MutationsRemoveSendingEmailArgs = {
  emailInput: Scalars['String'];
};


export type MutationsRemoveSubscriberArgs = {
  emailInput: Scalars['String'];
};


export type MutationsSendEmailArgs = {
  sendEmailInput: SendEmailInput;
};

export type Occupation = {
  __typename?: 'Occupation';
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type OccupationInput = {
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type OccupationResult = Occupation | ServerError | Unauthenticated;

export type Occupations = {
  __typename?: 'Occupations';
  occupations: Array<Occupation>;
};

export type OccupationsResult = Occupations | ServerError | Unauthenticated;

export type Product = {
  __typename?: 'Product';
  category: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductInput = {
  category: Scalars['String'];
  displayName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductResult = Product | ServerError | Unauthenticated;

export type Products = {
  __typename?: 'Products';
  products: Array<Product>;
};

export type ProductsResult = Products | ServerError | Unauthenticated;

export type Queries = {
  __typename?: 'Queries';
  getEmailTemplates: EmailTemplatesResult;
  getLanguages: LanguagesResult;
  getLastSentEmails: SentEmailsResult;
  getNumOfEmailsSent: Scalars['Int'];
  getOccupations: OccupationsResult;
  getProducts: ProductsResult;
  getSendingEmails: SendingEmailsResult;
  getSubscribers: SubscribersResult;
};


export type QueriesGetLastSentEmailsArgs = {
  inputData?: InputMaybe<InputData>;
};


export type QueriesGetNumOfEmailsSentArgs = {
  inputData?: InputMaybe<InputData>;
};


export type QueriesGetSubscribersArgs = {
  subscribersInput: SubscribersInput;
};

export type SendEmailInput = {
  data: EmailDataInput;
  date?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<OccupationInput>;
  products?: InputMaybe<Array<ProductInput>>;
};

/** Represents an email address to send the newsletter */
export type SendingEmail = {
  __typename?: 'SendingEmail';
  displayName: Scalars['String'];
  email: Scalars['String'];
  host: Scalars['String'];
  languages: Array<Scalars['String']>;
  occupations?: Maybe<Array<Occupation>>;
  pass?: Maybe<Scalars['String']>;
  port: Scalars['Int'];
  products: Array<Product>;
  secure: Scalars['Boolean'];
  type: Scalars['String'];
};

export type SendingEmailInput = {
  auth: AuthDataInput;
  displayName: Scalars['String'];
  email: Scalars['String'];
  host: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<OccupationInput>;
  port: Scalars['Int'];
  products?: InputMaybe<Array<ProductInput>>;
  secure: Scalars['Boolean'];
  type?: InputMaybe<Scalars['String']>;
};

export type SendingEmailResult = SendingEmail | ServerError | Unauthenticated;

export type SendingEmails = {
  __typename?: 'SendingEmails';
  sendingEmails: Array<Maybe<SendingEmail>>;
};

export type SendingEmailsResult = SendingEmails | ServerError | Unauthenticated;

export type SentEmail = {
  __typename?: 'SentEmail';
  data: EmailData;
  date: Scalars['String'];
  emails: Array<SendingEmail>;
  language: Language;
  subscribers: Array<Subscriber>;
};

export type SentEmailResult = SentEmail | ServerError | Unauthenticated;

export type SentEmails = {
  __typename?: 'SentEmails';
  sentEmails: Array<Maybe<SentEmail>>;
};

export type SentEmailsResult = SentEmails | ServerError | Unauthenticated;

export type ServerError = {
  __typename?: 'ServerError';
  message: Scalars['String'];
  stack?: Maybe<Scalars['String']>;
};

export type Subscriber = {
  __typename?: 'Subscriber';
  email: Scalars['String'];
  language: Scalars['String'];
  occupation: Occupation;
  products: Array<Product>;
};

export type SubscriberInput = {
  email: Scalars['String'];
  language: Scalars['String'];
  occupation: OccupationInput;
  products: Array<ProductInput>;
};

export type SubscriberNotFound = {
  __typename?: 'SubscriberNotFound';
  message: Scalars['String'];
};

export type SubscriberResult = ServerError | Subscriber | SubscriberNotFound | Unauthenticated | WrongEmailFormat;

export type Subscribers = {
  __typename?: 'Subscribers';
  subscribers: Array<Subscriber>;
};

export type SubscribersInput = {
  subscribers: Array<SubscribersInput>;
};

export type SubscribersResult = ServerError | SubscriberNotFound | Subscribers | Unauthenticated | WrongEmailFormat;

/** ERROR TYPES */
export type Unauthenticated = {
  __typename?: 'Unauthenticated';
  message: Scalars['String'];
};

export type WrongEmailFormat = {
  __typename?: 'WrongEmailFormat';
  message: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthDataInput: AuthDataInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  EditEmailTemplateInput: EditEmailTemplateInput;
  EditSendingEmailInput: EditSendingEmailInput;
  EditSubscriberInput: EditSubscriberInput;
  EmailData: ResolverTypeWrapper<EmailData>;
  EmailDataInput: EmailDataInput;
  EmailTemplate: ResolverTypeWrapper<EmailTemplate>;
  EmailTemplateInput: EmailTemplateInput;
  EmailTemplateResult: ResolversTypes['EmailTemplate'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  EmailTemplates: ResolverTypeWrapper<EmailTemplates>;
  EmailTemplatesResult: ResolversTypes['EmailTemplates'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  InputData: InputData;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Language: ResolverTypeWrapper<Language>;
  LanguageResult: ResolversTypes['Language'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  Languages: ResolverTypeWrapper<Languages>;
  LanguagesResult: ResolversTypes['Languages'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  Mutations: ResolverTypeWrapper<{}>;
  Occupation: ResolverTypeWrapper<Occupation>;
  OccupationInput: OccupationInput;
  OccupationResult: ResolversTypes['Occupation'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  Occupations: ResolverTypeWrapper<Occupations>;
  OccupationsResult: ResolversTypes['Occupations'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  ProductResult: ResolversTypes['Product'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  Products: ResolverTypeWrapper<Products>;
  ProductsResult: ResolversTypes['Products'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  Queries: ResolverTypeWrapper<{}>;
  SendEmailInput: SendEmailInput;
  SendingEmail: ResolverTypeWrapper<SendingEmail>;
  SendingEmailInput: SendingEmailInput;
  SendingEmailResult: ResolversTypes['SendingEmail'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  SendingEmails: ResolverTypeWrapper<SendingEmails>;
  SendingEmailsResult: ResolversTypes['SendingEmails'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  SentEmail: ResolverTypeWrapper<SentEmail>;
  SentEmailResult: ResolversTypes['SentEmail'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  SentEmails: ResolverTypeWrapper<SentEmails>;
  SentEmailsResult: ResolversTypes['SentEmails'] | ResolversTypes['ServerError'] | ResolversTypes['Unauthenticated'];
  ServerError: ResolverTypeWrapper<ServerError>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscriber: ResolverTypeWrapper<Subscriber>;
  SubscriberInput: SubscriberInput;
  SubscriberNotFound: ResolverTypeWrapper<SubscriberNotFound>;
  SubscriberResult: ResolversTypes['ServerError'] | ResolversTypes['Subscriber'] | ResolversTypes['SubscriberNotFound'] | ResolversTypes['Unauthenticated'] | ResolversTypes['WrongEmailFormat'];
  Subscribers: ResolverTypeWrapper<Subscribers>;
  SubscribersInput: SubscribersInput;
  SubscribersResult: ResolversTypes['ServerError'] | ResolversTypes['SubscriberNotFound'] | ResolversTypes['Subscribers'] | ResolversTypes['Unauthenticated'] | ResolversTypes['WrongEmailFormat'];
  Unauthenticated: ResolverTypeWrapper<Unauthenticated>;
  WrongEmailFormat: ResolverTypeWrapper<WrongEmailFormat>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthDataInput: AuthDataInput;
  Boolean: Scalars['Boolean'];
  EditEmailTemplateInput: EditEmailTemplateInput;
  EditSendingEmailInput: EditSendingEmailInput;
  EditSubscriberInput: EditSubscriberInput;
  EmailData: EmailData;
  EmailDataInput: EmailDataInput;
  EmailTemplate: EmailTemplate;
  EmailTemplateInput: EmailTemplateInput;
  EmailTemplateResult: ResolversParentTypes['EmailTemplate'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  EmailTemplates: EmailTemplates;
  EmailTemplatesResult: ResolversParentTypes['EmailTemplates'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  InputData: InputData;
  Int: Scalars['Int'];
  Language: Language;
  LanguageResult: ResolversParentTypes['Language'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  Languages: Languages;
  LanguagesResult: ResolversParentTypes['Languages'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  Mutations: {};
  Occupation: Occupation;
  OccupationInput: OccupationInput;
  OccupationResult: ResolversParentTypes['Occupation'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  Occupations: Occupations;
  OccupationsResult: ResolversParentTypes['Occupations'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  Product: Product;
  ProductInput: ProductInput;
  ProductResult: ResolversParentTypes['Product'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  Products: Products;
  ProductsResult: ResolversParentTypes['Products'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  Queries: {};
  SendEmailInput: SendEmailInput;
  SendingEmail: SendingEmail;
  SendingEmailInput: SendingEmailInput;
  SendingEmailResult: ResolversParentTypes['SendingEmail'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  SendingEmails: SendingEmails;
  SendingEmailsResult: ResolversParentTypes['SendingEmails'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  SentEmail: SentEmail;
  SentEmailResult: ResolversParentTypes['SentEmail'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  SentEmails: SentEmails;
  SentEmailsResult: ResolversParentTypes['SentEmails'] | ResolversParentTypes['ServerError'] | ResolversParentTypes['Unauthenticated'];
  ServerError: ServerError;
  String: Scalars['String'];
  Subscriber: Subscriber;
  SubscriberInput: SubscriberInput;
  SubscriberNotFound: SubscriberNotFound;
  SubscriberResult: ResolversParentTypes['ServerError'] | ResolversParentTypes['Subscriber'] | ResolversParentTypes['SubscriberNotFound'] | ResolversParentTypes['Unauthenticated'] | ResolversParentTypes['WrongEmailFormat'];
  Subscribers: Subscribers;
  SubscribersInput: SubscribersInput;
  SubscribersResult: ResolversParentTypes['ServerError'] | ResolversParentTypes['SubscriberNotFound'] | ResolversParentTypes['Subscribers'] | ResolversParentTypes['Unauthenticated'] | ResolversParentTypes['WrongEmailFormat'];
  Unauthenticated: Unauthenticated;
  WrongEmailFormat: WrongEmailFormat;
};

export type EmailDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailData'] = ResolversParentTypes['EmailData']> = {
  ampBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  htmlBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  textBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplate'] = ResolversParentTypes['EmailTemplate']> = {
  data?: Resolver<ResolversTypes['EmailData'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['Occupation']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplateResult'] = ResolversParentTypes['EmailTemplateResult']> = {
  __resolveType: TypeResolveFn<'EmailTemplate' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type EmailTemplatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplates'] = ResolversParentTypes['EmailTemplates']> = {
  emailTemplates?: Resolver<Array<Maybe<ResolversTypes['EmailTemplates']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplatesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplatesResult'] = ResolversParentTypes['EmailTemplatesResult']> = {
  __resolveType: TypeResolveFn<'EmailTemplates' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageResult'] = ResolversParentTypes['LanguageResult']> = {
  __resolveType: TypeResolveFn<'Language' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type LanguagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Languages'] = ResolversParentTypes['Languages']> = {
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguagesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguagesResult'] = ResolversParentTypes['LanguagesResult']> = {
  __resolveType: TypeResolveFn<'Languages' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type MutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutations'] = ResolversParentTypes['Mutations']> = {
  addEmailTemplate?: Resolver<Maybe<ResolversTypes['EmailTemplateResult']>, ParentType, ContextType, Partial<MutationsAddEmailTemplateArgs>>;
  addLanguage?: Resolver<Maybe<ResolversTypes['LanguageResult']>, ParentType, ContextType, RequireFields<MutationsAddLanguageArgs, 'languageInput'>>;
  addOccupation?: Resolver<Maybe<ResolversTypes['OccupationResult']>, ParentType, ContextType, RequireFields<MutationsAddOccupationArgs, 'occupationInput'>>;
  addProduct?: Resolver<Maybe<ResolversTypes['ProductResult']>, ParentType, ContextType, RequireFields<MutationsAddProductArgs, 'productInput'>>;
  addSendingEmail?: Resolver<Maybe<ResolversTypes['SendingEmailResult']>, ParentType, ContextType, RequireFields<MutationsAddSendingEmailArgs, 'sendingEmailInput'>>;
  addSubscriber?: Resolver<Maybe<ResolversTypes['SubscriberResult']>, ParentType, ContextType, RequireFields<MutationsAddSubscriberArgs, 'subscriberInput'>>;
  editEmailTemplate?: Resolver<Maybe<ResolversTypes['EmailTemplateResult']>, ParentType, ContextType, Partial<MutationsEditEmailTemplateArgs>>;
  editSendingEmail?: Resolver<Maybe<ResolversTypes['SendingEmailResult']>, ParentType, ContextType, RequireFields<MutationsEditSendingEmailArgs, 'sendingEmailInput'>>;
  editSubscriber?: Resolver<Maybe<ResolversTypes['SubscriberResult']>, ParentType, ContextType, RequireFields<MutationsEditSubscriberArgs, 'editSubscriberInput'>>;
  removeEmailTemplate?: Resolver<Maybe<ResolversTypes['EmailTemplateResult']>, ParentType, ContextType, Partial<MutationsRemoveEmailTemplateArgs>>;
  removeLanguage?: Resolver<Maybe<ResolversTypes['LanguageResult']>, ParentType, ContextType, RequireFields<MutationsRemoveLanguageArgs, 'languageInput'>>;
  removeOccupation?: Resolver<Maybe<ResolversTypes['OccupationResult']>, ParentType, ContextType, RequireFields<MutationsRemoveOccupationArgs, 'occupationInput'>>;
  removeProduct?: Resolver<Maybe<ResolversTypes['ProductResult']>, ParentType, ContextType, RequireFields<MutationsRemoveProductArgs, 'nameInput'>>;
  removeSendingEmail?: Resolver<Maybe<ResolversTypes['SendingEmailResult']>, ParentType, ContextType, RequireFields<MutationsRemoveSendingEmailArgs, 'emailInput'>>;
  removeSubscriber?: Resolver<Maybe<ResolversTypes['SubscriberResult']>, ParentType, ContextType, RequireFields<MutationsRemoveSubscriberArgs, 'emailInput'>>;
  sendEmail?: Resolver<Maybe<ResolversTypes['SentEmailResult']>, ParentType, ContextType, RequireFields<MutationsSendEmailArgs, 'sendEmailInput'>>;
};

export type OccupationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Occupation'] = ResolversParentTypes['Occupation']> = {
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OccupationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['OccupationResult'] = ResolversParentTypes['OccupationResult']> = {
  __resolveType: TypeResolveFn<'Occupation' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type OccupationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Occupations'] = ResolversParentTypes['Occupations']> = {
  occupations?: Resolver<Array<ResolversTypes['Occupation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OccupationsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['OccupationsResult'] = ResolversParentTypes['OccupationsResult']> = {
  __resolveType: TypeResolveFn<'Occupations' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductResult'] = ResolversParentTypes['ProductResult']> = {
  __resolveType: TypeResolveFn<'Product' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type ProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = {
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsResult'] = ResolversParentTypes['ProductsResult']> = {
  __resolveType: TypeResolveFn<'Products' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type QueriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Queries'] = ResolversParentTypes['Queries']> = {
  getEmailTemplates?: Resolver<ResolversTypes['EmailTemplatesResult'], ParentType, ContextType>;
  getLanguages?: Resolver<ResolversTypes['LanguagesResult'], ParentType, ContextType>;
  getLastSentEmails?: Resolver<ResolversTypes['SentEmailsResult'], ParentType, ContextType, Partial<QueriesGetLastSentEmailsArgs>>;
  getNumOfEmailsSent?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueriesGetNumOfEmailsSentArgs>>;
  getOccupations?: Resolver<ResolversTypes['OccupationsResult'], ParentType, ContextType>;
  getProducts?: Resolver<ResolversTypes['ProductsResult'], ParentType, ContextType>;
  getSendingEmails?: Resolver<ResolversTypes['SendingEmailsResult'], ParentType, ContextType>;
  getSubscribers?: Resolver<ResolversTypes['SubscribersResult'], ParentType, ContextType, RequireFields<QueriesGetSubscribersArgs, 'subscribersInput'>>;
};

export type SendingEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendingEmail'] = ResolversParentTypes['SendingEmail']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  occupations?: Resolver<Maybe<Array<ResolversTypes['Occupation']>>, ParentType, ContextType>;
  pass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  secure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendingEmailResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendingEmailResult'] = ResolversParentTypes['SendingEmailResult']> = {
  __resolveType: TypeResolveFn<'SendingEmail' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type SendingEmailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendingEmails'] = ResolversParentTypes['SendingEmails']> = {
  sendingEmails?: Resolver<Array<Maybe<ResolversTypes['SendingEmail']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendingEmailsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendingEmailsResult'] = ResolversParentTypes['SendingEmailsResult']> = {
  __resolveType: TypeResolveFn<'SendingEmails' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type SentEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['SentEmail'] = ResolversParentTypes['SentEmail']> = {
  data?: Resolver<ResolversTypes['EmailData'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emails?: Resolver<Array<ResolversTypes['SendingEmail']>, ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  subscribers?: Resolver<Array<ResolversTypes['Subscriber']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SentEmailResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SentEmailResult'] = ResolversParentTypes['SentEmailResult']> = {
  __resolveType: TypeResolveFn<'SentEmail' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type SentEmailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SentEmails'] = ResolversParentTypes['SentEmails']> = {
  sentEmails?: Resolver<Array<Maybe<ResolversTypes['SentEmail']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SentEmailsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SentEmailsResult'] = ResolversParentTypes['SentEmailsResult']> = {
  __resolveType: TypeResolveFn<'SentEmails' | 'ServerError' | 'Unauthenticated', ParentType, ContextType>;
};

export type ServerErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServerError'] = ResolversParentTypes['ServerError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stack?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscriber'] = ResolversParentTypes['Subscriber']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  occupation?: Resolver<ResolversTypes['Occupation'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriberNotFoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriberNotFound'] = ResolversParentTypes['SubscriberNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriberResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriberResult'] = ResolversParentTypes['SubscriberResult']> = {
  __resolveType: TypeResolveFn<'ServerError' | 'Subscriber' | 'SubscriberNotFound' | 'Unauthenticated' | 'WrongEmailFormat', ParentType, ContextType>;
};

export type SubscribersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscribers'] = ResolversParentTypes['Subscribers']> = {
  subscribers?: Resolver<Array<ResolversTypes['Subscriber']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscribersResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscribersResult'] = ResolversParentTypes['SubscribersResult']> = {
  __resolveType: TypeResolveFn<'ServerError' | 'SubscriberNotFound' | 'Subscribers' | 'Unauthenticated' | 'WrongEmailFormat', ParentType, ContextType>;
};

export type UnauthenticatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unauthenticated'] = ResolversParentTypes['Unauthenticated']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WrongEmailFormatResolvers<ContextType = any, ParentType extends ResolversParentTypes['WrongEmailFormat'] = ResolversParentTypes['WrongEmailFormat']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  EmailData?: EmailDataResolvers<ContextType>;
  EmailTemplate?: EmailTemplateResolvers<ContextType>;
  EmailTemplateResult?: EmailTemplateResultResolvers<ContextType>;
  EmailTemplates?: EmailTemplatesResolvers<ContextType>;
  EmailTemplatesResult?: EmailTemplatesResultResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  LanguageResult?: LanguageResultResolvers<ContextType>;
  Languages?: LanguagesResolvers<ContextType>;
  LanguagesResult?: LanguagesResultResolvers<ContextType>;
  Mutations?: MutationsResolvers<ContextType>;
  Occupation?: OccupationResolvers<ContextType>;
  OccupationResult?: OccupationResultResolvers<ContextType>;
  Occupations?: OccupationsResolvers<ContextType>;
  OccupationsResult?: OccupationsResultResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductResult?: ProductResultResolvers<ContextType>;
  Products?: ProductsResolvers<ContextType>;
  ProductsResult?: ProductsResultResolvers<ContextType>;
  Queries?: QueriesResolvers<ContextType>;
  SendingEmail?: SendingEmailResolvers<ContextType>;
  SendingEmailResult?: SendingEmailResultResolvers<ContextType>;
  SendingEmails?: SendingEmailsResolvers<ContextType>;
  SendingEmailsResult?: SendingEmailsResultResolvers<ContextType>;
  SentEmail?: SentEmailResolvers<ContextType>;
  SentEmailResult?: SentEmailResultResolvers<ContextType>;
  SentEmails?: SentEmailsResolvers<ContextType>;
  SentEmailsResult?: SentEmailsResultResolvers<ContextType>;
  ServerError?: ServerErrorResolvers<ContextType>;
  Subscriber?: SubscriberResolvers<ContextType>;
  SubscriberNotFound?: SubscriberNotFoundResolvers<ContextType>;
  SubscriberResult?: SubscriberResultResolvers<ContextType>;
  Subscribers?: SubscribersResolvers<ContextType>;
  SubscribersResult?: SubscribersResultResolvers<ContextType>;
  Unauthenticated?: UnauthenticatedResolvers<ContextType>;
  WrongEmailFormat?: WrongEmailFormatResolvers<ContextType>;
};

