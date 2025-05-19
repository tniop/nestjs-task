import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Patch,
  Param,
  Req,
} from '@nestjs/common';
import { RewardsService } from './rewards.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';

@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Post()
  create(@Body() createRewardDto: CreateRewardDto, @Req() req) {
    return this.rewardsService.create(createRewardDto, req.user.userId);
  }

  @Get()
  findAll(@Query() query) {
    return this.rewardsService.findAll(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRewardDto: UpdateRewardDto) {
    return this.rewardsService.update(id, updateRewardDto);
  }
}
