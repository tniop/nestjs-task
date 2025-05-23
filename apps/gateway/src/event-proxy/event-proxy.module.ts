import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { EventProxyMiddleware } from './event-proxy.middleware';
import { EventProxyController } from './event-proxy.controller';
import { EventProxyService } from './event-proxy.service';

@Module({
  controllers: [EventProxyController],
  providers: [EventProxyService],
})
export class EventProxyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EventProxyMiddleware)
      .forRoutes({ path: 'event*', method: RequestMethod.ALL });
  }
}
