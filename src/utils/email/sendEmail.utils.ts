import mailer from 'nodemailer';
import {
  EmailData,
  SendingEmail,
  Subscriber,
} from '../../definitions/generated/graphql';
import decryptAES from '../crypto/decryptAES.utils';

interface SendEmailArgs {
  sender: SendingEmail;
  recipients: Subscriber[];
  language: string;
  emailData: EmailData;
}

export default function sendEmail(args: SendEmailArgs) {
  const transporter = mailer.createTransport({
    host: args.sender.host,
    port: args.sender.port,
    secure: true,
    auth: {
      user: args.sender.email,
      // FIXME: hash is not possible but storing encrypted password is bad practice!
      pass: <string>decryptAES(args.sender.pass!),
    },
  });

  transporter.sendMail(
    {
      from: `${args.sender.displayName} ${args.sender.email}`,
      to: args.recipients[0].email,
      subject: args.emailData.subject,
      text: <string | undefined>args.emailData.textBody,
      html: <string | undefined>args.emailData.htmlBody,
      amp: <string | undefined>args.emailData.ampBody,
    },
    (err, info) => {
      if (err) throw err;
      // TODO: check for non-delivered emails and do smth about it :)
      console.log(info);
    }
  );
}
