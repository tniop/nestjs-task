import { PartialType } from '@nestjs/mapped-types';
import { CreateRewardRequestDto } from './create-reward-request.dto';

export class UpdateRewardRequestDto extends PartialType(
  CreateRewardRequestDto,
) {}
