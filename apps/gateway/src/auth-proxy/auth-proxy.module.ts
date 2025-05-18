import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthProxyMiddleware } from './auth-proxy.middleware';
import { AuthProxyController } from './auth-proxy.controller';
import { AuthProxyService } from './auth-proxy.service';

@Module({
  controllers: [AuthProxyController],
  providers: [AuthProxyService],
})
export class AuthProxyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthProxyMiddleware)
      .forRoutes({ path: 'auth*', method: RequestMethod.ALL });
  }
}
