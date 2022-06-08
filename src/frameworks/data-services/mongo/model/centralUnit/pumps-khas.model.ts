//Pompa Kurulumuna basınca gelen kısım

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PumpKhasDocument = PumpKhas & Document;

@Schema()
export class PumpKhas {
  @Prop({ required: true })
  userId: string;
  @Prop()
  pumpDetail: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const PumpKhasSchema = SchemaFactory.createForClass(PumpKhas);
