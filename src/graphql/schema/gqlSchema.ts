import 'graphql-import-node';
import { buildSchema } from 'graphql';
// import { buildASTSchema } from 'graphql';
// import schema from './schema.graphql';

// const gqlSchema = buildASTSchema(schema);

// Need to import the schema that way because ncc cannot parse .graphql files
const gqlSchema = buildSchema(`
type Subscriber {
  email: String!
  occupation: Occupation!
  products: [Product!]!
  language: String!
}

type Subscribers {
  subscribers: [Subscriber!]!
}

type Occupation {
  # Used as index in database - will be turned to all lowercase
  name: String!
  # Used in mails & UI - defaults to 'name'
  displayName: String
}

type Occupations {
  occupations: [Occupation!]!
}

type Product {
  # Used as index in database - will be turned to all lowercase
  name: String!
  category: String!
  # Used in mails & UI - defaults to 'name'
  displayName: String
}

type Products {
  products: [Product!]!
}

type Language {
  name: String!
}

type Languages {
  languages: [Language!]!
}

"Represents an email address to send the newsletter"
type SendingEmail {
  displayName: String!
  type: String!
  email: String!
  occupations: [Occupation!]
  products: [Product!]!
  languages: [String!]!
  host: String!
  port: Int!
  secure: Boolean!
  pass: String
}

type SendingEmails {
  sendingEmails: [SendingEmail]!
}

"Represents the content and title of a newsletter email"
type EmailData {
  subject: String!
  textBody: String
  htmlBody: String
  ampBody: String
}

type SentEmail {
  emails: [SendingEmail!]!
  data: EmailData!
  subscribers: [Subscriber!]!
  language: Language!
  date: String!
}

type SentEmails {
  sentEmails: [SentEmail]!
}

type EmailTemplate {
  type: String!
  data: EmailData!
  occupation: Occupation
  products: [Product!]
  language: String!
}

type EmailTemplates {
  emailTemplates: [EmailTemplates]!
}

"ERROR TYPES"
type Unauthenticated {
  message: String!
}

type WrongEmailFormat {
  message: String!
}

type SubscriberNotFound {
  message: String!
}

type ServerError {
  message: String!
  stack: String
}

"INPUT TYPES"
input InputData {
  email: String
  occupation: OccupationInput
  products: [ProductInput!]
  language: String
  maxNumber: Int
}

input AuthDataInput {
  user: String!
  pass: String!
}

input EmailDataInput {
  subject: String!
  textBody: String
  htmlBody: String
  ampBody: String
}

input SubscriberInput {
  email: String!
  occupation: OccupationInput!
  products: [ProductInput!]!
  language: String!
}

input EditSubscriberInput {
  email: String!
  occupation: OccupationInput
  products: [ProductInput!]
  language: String
}

input SubscribersInput {
  subscribers: [SubscribersInput!]!
}

input ProductInput {
  name: String!
  category: String!
  displayName: String
}

input OccupationInput {
  name: String!
  displayName: String
}

input SendingEmailInput {
  displayName: String!
  type: String
  email: String!
  occupation: OccupationInput
  products: [ProductInput!]
  language: String
  host: String!
  port: Int!
  secure: Boolean!
  auth: AuthDataInput!
}

input EditSendingEmailInput {
  displayName: String
  type: String
  email: String!
  occupation: OccupationInput
  products: [ProductInput!]
  language: String
  host: String
  port: Int
  secure: Boolean
  auth: AuthDataInput
}

input SendEmailInput {
  data: EmailDataInput!
  occupation: OccupationInput
  products: [ProductInput!]
  language: String
  date: String
}

input EmailTemplateInput {
  type: String!
  data: EmailDataInput!
  occupation: OccupationInput
  products: [ProductInput!]
  language: String!
}

input EditEmailTemplateInput {
  type: String!
  data: EmailDataInput
  occupation: OccupationInput
  products: [ProductInput!]
  language: String
}

union SubscriberResult =
    Subscriber
  | WrongEmailFormat
  | SubscriberNotFound
  | Unauthenticated
  | ServerError

union SubscribersResult =
    Subscribers
  | WrongEmailFormat
  | SubscriberNotFound
  | Unauthenticated
  | ServerError

union OccupationResult = Occupation | Unauthenticated | ServerError
union OccupationsResult = Occupations | Unauthenticated | ServerError

union ProductResult = Product | Unauthenticated | ServerError
union ProductsResult = Products | Unauthenticated | ServerError

union LanguageResult = Language | Unauthenticated | ServerError
union LanguagesResult = Languages | Unauthenticated | ServerError

union SendingEmailResult = SendingEmail | Unauthenticated | ServerError
union SendingEmailsResult = SendingEmails | Unauthenticated | ServerError

union SentEmailResult = SentEmail | Unauthenticated | ServerError
union SentEmailsResult = SentEmails | Unauthenticated | ServerError

union EmailTemplateResult = EmailTemplate | Unauthenticated | ServerError
union EmailTemplatesResult = EmailTemplates | Unauthenticated | ServerError

type Queries {
  getSubscribers(subscribersInput: SubscribersInput!): SubscribersResult!
  getOccupations: OccupationsResult!
  getProducts: ProductsResult!
  getLanguages: LanguagesResult!
  getNumOfEmailsSent(inputData: InputData): Int!
  getSendingEmails: SendingEmailsResult!
  getLastSentEmails(inputData: InputData): SentEmailsResult!
  getEmailTemplates: EmailTemplatesResult!
}

type Mutations {
  addSubscriber(subscriberInput: SubscriberInput!): SubscriberResult
  removeSubscriber(emailInput: String!): SubscriberResult
  editSubscriber(editSubscriberInput: EditSubscriberInput!): SubscriberResult
  addOccupation(occupationInput: OccupationInput!): OccupationResult
  removeOccupation(occupationInput: OccupationInput!): OccupationResult
  addProduct(productInput: ProductInput!): ProductResult
  removeProduct(nameInput: String!): ProductResult
  addLanguage(languageInput: String!): LanguageResult
  removeLanguage(languageInput: String!): LanguageResult
  addSendingEmail(sendingEmailInput: SendingEmailInput!): SendingEmailResult
  removeSendingEmail(emailInput: String!): SendingEmailResult
  editSendingEmail(sendingEmailInput: SendingEmailInput!): SendingEmailResult
  sendEmail(sendEmailInput: SendEmailInput!): SentEmailResult
  addEmailTemplate(emailTemplateInput: EmailTemplateInput): EmailTemplateResult
  removeEmailTemplate(
    emailTemplateInput: EmailTemplateInput
  ): EmailTemplateResult
  editEmailTemplate(
    editEmailTemplateInput: EditEmailTemplateInput
  ): EmailTemplateResult
}

schema {
  query: Queries
  mutation: Mutations
}
`);

export default gqlSchema;
