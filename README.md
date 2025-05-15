# 프로젝트 실행

1. 저장소 클론  
```bash
git clone <레포지토리 URL>
cd <프로젝트 폴더>
```

2. `.env` 파일 생성 및 환경 변수 설정  
```bash
cd <프로젝트_폴더>

# vi로 .env 파일 생성 및 편집
vi .env

# .env 예시
MONGO_ROOT_USERNAME=root
MONGO_ROOT_PASSWORD=root
MONGO_DATABASE=event_rewards
MONGO_PORT=27017

GATEWAY_PORT=3000
AUTH_PORT=3001
EVENT_PORT=3002

NODE_ENV=development
JWT_SECRET=jwt_secret
```

3. Docker Compose로 컨테이너 실행
```bash
# .env 환경변수 기반 백그라운드 실행
docker compose up -d

# 중지
docker compose down
```
