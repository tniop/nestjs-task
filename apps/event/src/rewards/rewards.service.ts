import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reward } from './schemas/reward.schema';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';

@Injectable()
export class RewardsService {
  constructor(@InjectModel(Reward.name) private rewardModel: Model<Reward>) {}

  async create(createRewardDto: CreateRewardDto, userId: string) {
    return this.rewardModel.create(createRewardDto);
  }

  async findAll(query: any) {
    return this.rewardModel.find(query).exec();
  }

  async update(id: string, updateRewardDto: UpdateRewardDto) {
    return this.rewardModel
      .findByIdAndUpdate(id, updateRewardDto, { new: true })
      .exec();
  }
}
