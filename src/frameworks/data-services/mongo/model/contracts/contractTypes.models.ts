import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ContractTypesDocument = ContractTypes & Document;

@Schema()
export class ContractTypes {
  @Prop({ required: true })
  name: string;
  @Prop()
  title: string;
  @Prop()
  subMainTitle: string;
  @Prop()
  subContTitle: string;
  @Prop()
  description: string;
  @Prop()
  mainDescription: string;
  @Prop()
  content: string;
  @Prop()
  mainContent: string;
  @Prop()
  subContent: string;
  @Prop()
  altText: string;
  @Prop()
  altMainText: string;
  @Prop()
  altContentText: string;
  @Prop()
  contractTime: string;
  @Prop({ default: true })
  isActive: boolean;
}

export const ContractTypesSchema = SchemaFactory.createForClass(ContractTypes);
