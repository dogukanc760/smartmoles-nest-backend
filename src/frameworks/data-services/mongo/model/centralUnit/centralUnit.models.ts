//Hub yönetiminden müşteri seçip tıkladıgımızda ilk gelen sayfa

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CentralUnitDocument = CentralUnit & Document;

@Schema()
export class CentralUnit {
  @Prop({ required: true })
  userId: string;
  @Prop()
  projectImg: string;
  @Prop()
  hourType: string;
  @Prop()
  contractSerialNum: string;
  @Prop()
  name: string;
  @Prop()
  serverIP: string;
  @Prop()
  serverPort: string;
  @Prop({ default: true })
  isActive: boolean;
  @Prop({ default: true })
  status: boolean;
}

export const CentralUnitSchema = SchemaFactory.createForClass(CentralUnit);
