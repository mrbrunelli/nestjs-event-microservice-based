import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('WORKER_SERVICE') private readonly client: ClientProxy) {}

  @Post()
  async registerNews() {
    const message = {
      date: '2022-04-26',
      time: '11:40',
      content:
        'Dólar cai pela sexta vez. Brasileiros que trabalham no exterior estão desesperados.',
      htmlContent:
        '<h1>Dólar cai pela sexta vez</h1><br/><p>Brasileiros que trabalham no exterior estão desesperados</p>',
    };

    this.client.emit('register_news', message);

    return message;
  }
}
