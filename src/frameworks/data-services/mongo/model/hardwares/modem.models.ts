//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';
import { UserNew } from '../users/user-new.model';

export type ModemDocument = Modem & Document;

@Schema()
export class Modem {
  @Prop()
  imeiNum: string;
  @Prop()
  user: [UserNew];
  @Prop({ default: true })
  isActive: boolean;
}

export const ModemSchema = SchemaFactory.createForClass(Modem);
