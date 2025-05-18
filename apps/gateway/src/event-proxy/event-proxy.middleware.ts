import { Injectable, NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

@Injectable()
export class EventProxyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const proxy = createProxyMiddleware({
      target: process.env.EVENT_API_URL,
      changeOrigin: true,
      pathRewrite: { '^/event': '/event' },
      on: {
        proxyReq: fixRequestBody,
      },
    });
    proxy(req, res, next);
  }
}
