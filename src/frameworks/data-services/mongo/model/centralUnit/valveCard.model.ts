//Vana Kartı grubu
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ValveCardDocument = ValveCard & Document;

@Schema()
export class ValveCard {
  @Prop({ required: true })
  userId: string;
  @Prop()
  deviceId: string;
  @Prop()
  deviceLocation: string;
  @Prop()
  waterMeter: string;
  @Prop()
  waterSensor: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const ValveCardSchema = SchemaFactory.createForClass(ValveCard);
