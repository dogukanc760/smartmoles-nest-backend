//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';

export type PumpsDocument = Pumps & Document;

@Schema()
export class Pumps {
  @Prop({ required: true })
  pumpType: string;
  @Prop()
  pumpManagementType: string;
  @Prop()
  valveManagementType: string;
  @Prop()
  deviceId: string;
  @Prop()
  deviceName: string;
  @Prop()
  deviceLocation: string;
  @Prop()
  responseRangeWhenIrrigation: string;
  @Prop()
  responseRangeNonIrrigation: string;
  @Prop()
  waterMeter: string;
  @Prop()
  numberOfPulses: number;
  @Prop()
  boxMoistureSensor: boolean;
  @Prop()
  gpsModule: string;
  @Prop({ default: true })
  isActive: boolean;
}

export const PumpsSchema = SchemaFactory.createForClass(Pumps);
