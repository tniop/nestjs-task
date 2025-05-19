import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Req,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto, @Req() req) {
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
    return this.eventsService.create(createEventDto, userId);
  }

  @Get()
  findAll(@Query() query) {
    return this.eventsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }
}
