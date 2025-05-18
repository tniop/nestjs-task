import { Test, TestingModule } from '@nestjs/testing';
import { EventProxyController } from './event-proxy.controller';

describe('EventProxyController', () => {
  let controller: EventProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventProxyController],
    }).compile();

    controller = module.get<EventProxyController>(EventProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
