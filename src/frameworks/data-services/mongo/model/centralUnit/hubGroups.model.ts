//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type HubGroupsDocument = HubGroups & Document;

@Schema()
export class HubGroups {
  @Prop({ required: true })
  centralUnitId: string;
  @Prop()
  name: string;
  @Prop()
  deviceType: string;

  @Prop()
  hubHour: string;
  @Prop()
  hubDate: string;

  serverIP: string;

  serverPort: string;

  @Prop()
  code: string;
  @Prop()
  status: string;
  @Prop()
  valveCheck: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const HubGroupsSchema = SchemaFactory.createForClass(HubGroups);
