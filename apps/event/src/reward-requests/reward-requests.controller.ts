import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Req,
  Patch,
  Param,
} from '@nestjs/common';
import { RewardRequestsService } from './reward-requests.service';
import { CreateRewardRequestDto } from './dto/create-reward-request.dto';
import { UpdateRewardRequestDto } from './dto/update-reward-request.dto';

@Controller('reward-requests')
export class RewardRequestsController {
  constructor(private readonly rewardRequestsService: RewardRequestsService) {}

  @Post()
  create(@Body() createRewardRequestDto: CreateRewardRequestDto, @Req() req) {
    return this.rewardRequestsService.create(
      createRewardRequestDto,
      req.user.userId,
    );
  }

  @Get()
  findAll(@Query() query, @Req() req) {
    return this.rewardRequestsService.findAll(query, req.user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRewardRequestDto: UpdateRewardRequestDto,
  ) {
    return this.rewardRequestsService.update(id, updateRewardRequestDto);
  }
}
