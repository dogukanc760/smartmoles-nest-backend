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
  @Prop({ default: true })
  isActive: boolean;
}

export const PumpsSchema = SchemaFactory.createForClass(Pumps);
