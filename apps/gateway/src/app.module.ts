import { Module, MiddlewareConsumer } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from './common/roles.guard';
import { JwtMiddleware } from './common/middlewares/jwt.middleware';
import { EventProxyModule } from './event-proxy/event-proxy.module';
import { AuthProxyModule } from './auth-proxy/auth-proxy.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    EventProxyModule,
    AuthProxyModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*');
  }
}
