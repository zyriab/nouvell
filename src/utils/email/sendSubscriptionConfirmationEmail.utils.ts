import { Subscriber, SendingEmail } from '../../definitions/generated/graphql';
import {
  EmailTemplate,
  SendingEmail as SendingEmailModel,
} from '../../models/models';
import { getEmailBody } from '../tools.utils';
import sendEmail from './sendEmail.utils';

export default async function sendConfirmationEmail(subscriber: Subscriber) {
  const template = await EmailTemplate.findOne({
    name: 'Subscription confirmation email',
    language: subscriber.language,
  });

  if (template == null) {
    throw new Error(
      'Subscription confirmation email template could not be found in database.'
    );
  }

  const sendingEmail = await SendingEmailModel.findOne({
    name: 'Confirmation email',
  });

  if (sendingEmail == null) {
    throw new Error('Confirmation email could not be found in database.');
  }

  const emailBody = getEmailBody(template.data);

  emailBody
    .getElementById('edit-link')
    .setAttribute(
      'href',
      `${process.env.EDIT_SUBSCRIBER_URL}?email=${subscriber.email}`
    );

  for (const p of subscriber.products) {
    // The || condition is redundant
    emailBody.getElementById('product-list').innerHTML += `<li>${
      p.displayName || p.name
    }</li>`;
  }

  sendEmail({
    sender: <SendingEmail>(<unknown>sendingEmail),
    recipients: [subscriber],
    emailData: {
      subject: template.data.subject,
      htmlBody: emailBody.toString(),
    },
    language: subscriber.language,
  });
}
