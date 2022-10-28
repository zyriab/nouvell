import { Subscriber, SendingEmail } from '../../definitions/generated/graphql';
import {
  EmailTemplate,
  SendingEmail as SendingEmailModel,
} from '../../models/models';
import sendEmail from './sendEmail.utils';

export default async function sendConfirmationEmail(subscriber: Subscriber) {
  const template = await EmailTemplate.findOne({
    name: 'Unsubscription confirmation email',
    language: subscriber.language,
  });

  if (template == null) {
    throw new Error(
      'Unsubscription confirmation email template could not be found in database.'
    );
  }

  const sendingEmail = await SendingEmailModel.findOne({
    name: 'Confirmation email',
  });

  if (sendingEmail == null) {
    throw new Error('Confirmation email could not be found in database.');
  }

  await sendEmail({
    sender: <SendingEmail>(<unknown>sendingEmail),
    recipients: [subscriber],
    emailData: template.data,
    language: subscriber.language,
  });
}
