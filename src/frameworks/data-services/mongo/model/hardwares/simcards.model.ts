//simkartlar
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserNew } from '../users/user-new.model';

export type SimCardDocument = SimCard & Document;

@Schema()
export class SimCard {
  @Prop()
  user: [UserNew];
  @Prop()
  gsm: string;
  @Prop()
  serialNum: string;
  @Prop()
  staticIP: string;
  @Prop({ default: true })
  isActive: boolean;
}

export const SimCardSchema = SchemaFactory.createForClass(SimCard);
