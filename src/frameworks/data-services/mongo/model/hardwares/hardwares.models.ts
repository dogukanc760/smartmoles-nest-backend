//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';

export type HardWaresDocument = HardWares & Document;

@Schema()
export class HardWares {
  @Prop({ required: true })
  hardwareName: string;
  @Prop()
  price: number;
  @Prop()
  firstCount: number;
  @Prop()
  lastStockCount: number;
  @Prop()
  deliveryCount: number;
  @Prop({ default: true })
  isActive: boolean;
}

export const HardWaresSchema = SchemaFactory.createForClass(HardWares);
