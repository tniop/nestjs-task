import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RewardRequest } from './schemas/reward-request.schema';
import { CreateRewardRequestDto } from './dto/create-reward-request.dto';
import { UpdateRewardRequestDto } from './dto/update-reward-request.dto';

@Injectable()
export class RewardRequestsService {
  constructor(
    @InjectModel(RewardRequest.name)
    private rewardRequestModel: Model<RewardRequest>,
  ) {}

  async create(createRewardRequestDto: CreateRewardRequestDto, userId: string) {
    // 중복 요청 방지
    const exists = await this.rewardRequestModel.findOne({
      userId,
      eventId: createRewardRequestDto.eventId,
      rewardId: createRewardRequestDto.rewardId,
      status: { $in: ['REQUESTED', 'SUCCESS'] },
    });
    if (exists) throw new BadRequestException('이미 요청된 보상입니다.');

    // 조건 검증 로직은 실제 구현 필요
    const conditionMet = true;
    const status = conditionMet ? 'SUCCESS' : 'FAILED';

    return this.rewardRequestModel.create({
      ...createRewardRequestDto,
      userId,
      status,
      requestedAt: new Date(),
      processedAt: new Date(),
      reason: conditionMet ? undefined : '조건 미충족',
    });
  }

  async findAll(query: any, user: any) {
    if (
      user.roles.includes('ADMIN') ||
      user.roles.includes('OPERATOR') ||
      user.roles.includes('AUDITOR')
    ) {
      return this.rewardRequestModel.find(query).exec();
    }
    return this.rewardRequestModel
      .find({ userId: user.userId, ...query })
      .exec();
  }

  async update(id: string, updateRewardRequestDto: UpdateRewardRequestDto) {
    return this.rewardRequestModel
      .findByIdAndUpdate(id, updateRewardRequestDto, { new: true })
      .exec();
  }
}
