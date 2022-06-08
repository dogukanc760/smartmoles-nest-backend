//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';
import { ContractTypes } from './contractTypes.models';

export type UserContractDocument = UserContract & Document;

@Schema()
export class UserContract {
  @Prop({ required: true })
  userId: string;
  @Prop()
  contractId: string;
  @Prop()
  contract: [ContractTypes];
  @Prop({ default: true })
  isActive: boolean;
}

export const UserContractSchema = SchemaFactory.createForClass(UserContract);
