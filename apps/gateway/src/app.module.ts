import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthProxyModule } from './auth-proxy/auth-proxy.module';
import { EventProxyModule } from './event-proxy/event-proxy.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthProxyModule,
    EventProxyModule,
  ],
})
export class AppModule {}
