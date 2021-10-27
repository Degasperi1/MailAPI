import { Request, Response } from 'express';
import { IMessage } from '../interfaces/IMailProvider';
import { MailService } from '../services/MailService';
import { MailtrapMailProvider } from '../providers/MailtrapMailProvider';

import 'dotenv/config';

class SendMailController {
  async handle(request: Request, response: Response) {
    const { to, subject, body } = request.body;

    const fromMail = {
      name: process.env.MAIL_NAME,
      email: process.env.MAIL_ADDRESS,
    };

    const mailProvider = new MailtrapMailProvider();

    const mailService = new MailService(mailProvider);

    const res = await mailService.execute({
      to,
      from: fromMail,
      subject,
      body,
    });

    return response.json(res);
  }
}

export { SendMailController };
