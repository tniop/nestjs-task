import { Injectable, NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

@Injectable()
export class EventProxyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const proxy = createProxyMiddleware({
      target: process.env.EVENT_API_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/event': '/',
      },
      on: {
        proxyReq: (proxyReq, req) => {
          if (req.headers.authorization) {
            // 클라이언트에서 전달된 액세스 토큰 사용
            proxyReq.setHeader('Authorization', req.headers.authorization);
          }
          fixRequestBody(proxyReq, req); // 본문 처리 필수
        },
      },
    });
    proxy(req, res, next);
  }
}
