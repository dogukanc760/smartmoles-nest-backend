//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';
import { DeviceTypes } from './device-types.models';

export type IrrigationTypesDocument = IrrigationTypes & Document;

@Schema()
export class IrrigationTypes {
  @Prop({ required: true })
  name: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  devicesType: [DeviceTypes];
  @Prop({ default: true })
  isActive: boolean;
}

export const IrrigationTypesSchema =
  SchemaFactory.createForClass(IrrigationTypes);
