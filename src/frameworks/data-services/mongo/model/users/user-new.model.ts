//Hub gruplarına tıklanınca gelen yer
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Card } from '../card.model';
import { PermissionGroup } from '../permissions/permission-groups.model';
import { Permission } from '../permissions/permission.model';

export type UserNewDocument = UserNew & Document;

@Schema()
export class UserNew {
  @Prop({ required: true })
  username: string;
  @Prop()
  citizenshipNum: string;
  @Prop()
  nationality: string;
  @Prop()
  companyName: string;
  @Prop()
  taxNum: string;
  @Prop()
  mersisNo: string;
  @Prop()
  address: string;
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop()
  email: string;
  @Prop()
  emailIsVerified: string;
  @Prop()
  emailVerifiedAt: string;
  @Prop()
  country: string;
  @Prop()
  city: string;
  @Prop()
  distinct: string;
  @Prop()
  detailAddress: string;
  @Prop()
  postalCode: string;
  @Prop()
  phone: string;
  @Prop()
  companyPhone: string;
  @Prop()
  homePhone: string;
  @Prop()
  password: string;
  @Prop()
  permissions: [PermissionGroup];
  @Prop()
  userType: string;
  @Prop({ default: false })
  isAdmin: boolean;
  @Prop({ default: false })
  isBusiness: boolean;
  @Prop({ default: true })
  isActive: boolean;
}

export const UserNewSchema = SchemaFactory.createForClass(UserNew);
