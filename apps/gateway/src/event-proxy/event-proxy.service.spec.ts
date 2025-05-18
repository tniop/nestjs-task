import { Test, TestingModule } from '@nestjs/testing';
import { EventProxyService } from './event-proxy.service';

describe('EventProxyService', () => {
  let service: EventProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventProxyService],
    }).compile();

    service = module.get<EventProxyService>(EventProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
