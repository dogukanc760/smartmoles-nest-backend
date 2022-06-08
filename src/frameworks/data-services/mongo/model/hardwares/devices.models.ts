//cihazlar butonuna basnca gelecek yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';

export type DevicesDocument = Devices & Document;

@Schema()
export class Devices {
  @Prop({ required: true })
  deviceName: string;
  @Prop()
  deviceLocation: string;
  @Prop()
  khasResetCount: string;
  @Prop()
  sensorRangeLimit: string;
  @Prop()
  sensorDigitalLimit: string;
  @Prop({ default: true })
  isActive: boolean;
}

export const DevicesSchema = SchemaFactory.createForClass(Devices);
