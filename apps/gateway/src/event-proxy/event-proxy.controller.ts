import { Controller, Get, UseGuards, Post } from '@nestjs/common';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';

@Controller('event')
@UseGuards(RolesGuard)
export class EventProxyController {
  @Post()
  @Roles('OPERATOR', 'ADMIN')
  proxyEventPost() {}

  @Get()
  @Roles('USER', 'AUDITOR', 'ADMIN')
  proxyEventGet() {}
}
