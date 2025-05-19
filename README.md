## 프로젝트 실행 방법

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

4. postman으로 api test
    - /docs 디렉토리 postman api collection / environment import

## comment

- 25.05.20 화 미완 제출. 앞으로 개선예정
- 후기
  1. 각 서버에서 기능구현은 되었으나, msa에 대한 이해도가 떨어져 gateway를 통해 auth / event로 요청 보내는 방법을 오래 해맸음.
- 개선점(기능 이외에)
  1. filter, logger 추가 필요. logger 같은 경우 한 트랜잭션을 uuid로 묶어 이슈발생 시 확인이 쉽게 처리
  2. custom error 처리 추가
  3. auth jwt strategy를 루트 libs/common에 통합
  4. 테스트코드
  5. db seeding script
- 현 직장에서 node express.js(typescript X) 환경에서만 개발해왔었는데 nest.js로 로그인, 토큰인증, msa 구조 개발 공부할 수 있었던 좋은 기회였습니다. 비록 미완으로 제출하지만 기회를 주셔서 감사합니다.