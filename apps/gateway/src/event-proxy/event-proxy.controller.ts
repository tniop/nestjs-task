import { Controller, All, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/jwt-auth.guard';
import { RolesGuard } from '../common/roles.guard';
import { Roles } from '../common/roles.decorator';

@Controller('event')
export class EventProxyController {
  @All('*')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER', 'OPERATOR', 'ADMIN')
  proxyAll(@Req() req, @Res() res) {}
}
