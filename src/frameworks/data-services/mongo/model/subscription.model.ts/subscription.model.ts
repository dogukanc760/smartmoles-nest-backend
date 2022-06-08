//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';
import { HardWares } from '../hardwares/hardwares.models';

export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription {
  @Prop({ required: true })
  userId: string;
  @Prop()
  contractId: string;
  @Prop()
  country: string;
  @Prop()
  city: string;
  @Prop()
  distinct: string;
  @Prop()
  street: string;
  @Prop()
  postalCode: string;
  @Prop()
  coordinates: string;
  @Prop()
  detailedAddress: string;
  @Prop()
  creatorCompany: string;
  @Prop()
  creatorCompanyCode: string;
  @Prop()
  creatorStaffName: string;
  @Prop()
  simCardNo: string;
  @Prop()
  simCardIp: string;
  @Prop()
  modemImei: string;
  @Prop()
  sensorIds: string[];
  @Prop()
  softwareVersion: string;
  @Prop()
  serverIp: string;
  @Prop()
  delivered: [HardWares];
  @Prop({ default: true })
  isActive: boolean;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
