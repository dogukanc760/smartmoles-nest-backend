//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';

export type PermissionDocument = Permission & Document;

@Schema()
export class Permission {
  @Prop()
  groupId: string;
  @Prop()
  permissionName: string;
  @Prop()
  permissionDescription: string;
  @Prop({ default: true })
  isActive: boolean;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
