import { Injectable, NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

@Injectable()
export class AuthProxyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const proxy = createProxyMiddleware({
      target: process.env.AUTH_API_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/auth': '/auth',
      },
      on: {
        proxyReq: fixRequestBody,
      },
    });
    proxy(req, res, next);
  }
}
