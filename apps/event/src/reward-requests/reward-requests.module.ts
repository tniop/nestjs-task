import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RewardRequest,
  RewardRequestSchema,
} from './schemas/reward-request.schema';
import { RewardRequestsController } from './reward-requests.controller';
import { RewardRequestsService } from './reward-requests.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RewardRequest.name, schema: RewardRequestSchema },
    ]),
  ],
  providers: [RewardRequestsService],
  controllers: [RewardRequestsController],
  exports: [RewardRequestsService],
})
export class RewardRequestsModule {}
