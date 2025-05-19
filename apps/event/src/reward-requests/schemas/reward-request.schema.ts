import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class RewardRequest extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Event', required: true })
  eventId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Reward', required: true })
  rewardId: Types.ObjectId;

  @Prop({ required: true, enum: ['REQUESTED', 'SUCCESS', 'FAILED'] })
  status: string;

  @Prop()
  requestedAt: Date;

  @Prop()
  processedAt: Date;

  @Prop()
  reason: string;
}

export const RewardRequestSchema = SchemaFactory.createForClass(RewardRequest);
