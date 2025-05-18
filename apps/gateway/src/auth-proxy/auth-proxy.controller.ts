import { Controller, All, Req, Res } from '@nestjs/common';

@Controller('auth')
export class AuthProxyController {
  @All('*')
  proxy(@Req() req: any, @Res() res: any) {}
}
