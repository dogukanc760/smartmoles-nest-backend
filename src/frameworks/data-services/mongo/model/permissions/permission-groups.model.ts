//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';
import { Permission } from './permission.model';

export type PermissionGroupDocument = PermissionGroup & Document;

@Schema()
export class PermissionGroup {
  @Prop({ required: true })
  groupName: string;
  @Prop()
  groupTitle: string;
  @Prop()
  groupDescription: string;
  @Prop()
  groupLevel: string;
  @Prop()
  groupContent: [Permission];
  @Prop({ default: true })
  isActive: boolean;
}

export const PermissionGroupSchema =
  SchemaFactory.createForClass(PermissionGroup);
