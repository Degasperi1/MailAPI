import { IMailProvider, IMessage } from '../interfaces/IMailProvider';

class MailService {
  constructor(private mailProvider: IMailProvider) {}

  async execute(data: IMessage) {
    await this.mailProvider.sendMail({
      to: {
        name: data.to.name,
        email: data.to.email,
      },
      from: {
        name: data.from.name,
        email: data.from.email,
      },
      subject: data.subject,
      body: data.body,
    });

    return `Sucesso! Email enviado para ${data.to.email}`;
  }
}

export { MailService };
