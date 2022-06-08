//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';

export type DeviceTypesDocument = DeviceTypes & Document;

@Schema()
export class DeviceTypes {
  @Prop({ required: true })
  name: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop({ default: true })
  isActive: boolean;
}

export const DeviceTypesSchema = SchemaFactory.createForClass(DeviceTypes);
