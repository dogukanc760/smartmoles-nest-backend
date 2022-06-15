//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';
import { DeviceTypes } from '../hardwares/device-types.models';
import { IrrigationTypes } from '../hardwares/irrigation-types.model';

export type KhasDocument = Khas & Document;

@Schema()
export class Khas {
  @Prop({ required: true })
  centralUnitId: string;
  @Prop()
  userId: string;
  @Prop()
  valveName: string;
  @Prop()
  sensorType: [DeviceTypes];
  @Prop()
  plantsType: string;
  @Prop()
  devicePositioning: string;
  @Prop()
  dripperRange: string;
  @Prop()
  irrigationTypes: [IrrigationTypes];
  @Prop()
  status: string;
  @Prop()
  valveChecks: string;
  @Prop()
  responseRangeWhenIrrigation: string;
  @Prop()
  responseRangeNonIrrigation: string;
  @Prop()
  // x ten y ye kadar olan değerlik aralığı bir nevi logaritmik limit
  moistureLimitRange: string[];
  @Prop({ default: true })
  isActive: boolean;
}

export const KhasSchema = SchemaFactory.createForClass(Khas);
