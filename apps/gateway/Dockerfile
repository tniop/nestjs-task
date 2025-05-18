# 빌드 단계
FROM node:18.20.8-alpine AS builder

WORKDIR /app

# 1. 루트 패키지 및 공통 설정 파일 복사
COPY package*.json ./
COPY nest-cli.json ./
COPY tsconfig*.json ./

# 2. 앱 코드 복사 (gateway + 라이브러리)
COPY apps/gateway ./apps/gateway
COPY libs ./libs

# 3. 의존성 설치 및 빌드
RUN npm install && npx nest build gateway

# 실행 단계
FROM node:18.20.8-alpine

WORKDIR /app

# 4. 빌드 결과물 복사
COPY --from=builder /app/dist/apps/gateway ./dist
COPY --from=builder /app/node_modules ./node_modules

# 5. 환경 설정
ENV NODE_ENV development
EXPOSE 3000
CMD ["node", "dist/main.js"]
