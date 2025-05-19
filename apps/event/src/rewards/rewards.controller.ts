import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Patch,
  Param,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { RewardsService } from './rewards.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('rewards')
export class RewardsController {
  constructor(
    private readonly rewardsService: RewardsService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  create(@Body() createRewardDto: CreateRewardDto, @Req() req) {
    // 1. 헤더에서 토큰 추출
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid authorization header');
    }

    // 2. 토큰 디코딩
    const token = authHeader.split(' ')[1];
    const payload = this.jwtService.decode(token);

    // 3. 사용자 ID 추출
    const userId = payload.sub; // JWT payload의 sub 필드 사용
    return this.rewardsService.create(createRewardDto, userId);
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
