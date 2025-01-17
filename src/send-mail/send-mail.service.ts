import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendMailService {
  constructor(private mailerService: MailerService) {}

  public example() {
    this.mailerService
      .sendMail({
        to: 'phamvanbk11@gmail.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'welcome',
      })
      .then(() => {
        console.log('gui mail thành cong !!!');
      })
      .catch(() => {
        console.log('gui mail that bai !!!');
      });
  }
}
