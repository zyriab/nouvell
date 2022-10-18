import { parse } from 'node-html-parser';
import { EmailData } from '../../definitions/generated/graphql';

export default function getEmailBody(emailData: EmailData) {
  if (emailData.ampBody != null) {
    return parse(emailData.ampBody);
  }

  if (emailData.htmlBody != null) {
    return parse(emailData.htmlBody);
  }

  if (emailData.textBody != null) {
    return parse(emailData.textBody);
  }

  throw new Error('No email body provided.');
}
