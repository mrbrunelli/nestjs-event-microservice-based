import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('WORKER_SERVICE') private readonly client: ClientProxy) {}

  @EventPattern('register_news')
  receiveNews(data): void {
    console.info('Received news', data);
  }
}
