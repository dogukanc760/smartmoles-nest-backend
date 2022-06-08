import { IsNotEmptyObject, IsString } from 'class-validator';
import { Permission, PermissionGroup } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserNewDto {
  @IsString()
  username: string;
  @IsString()
  citizenshipNum: string;
  @IsString()
  nationality: string;
  @IsString()
  companyName: string;
  @IsString()
  taxNum: string;
  @IsString()
  mersisNo: string;
  @IsString()
  address: string;
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsString()
  email: string;
  @IsString()
  emailIsverified: string;
  @IsString()
  emailverifiedAt: string;
  @IsString()
  country: string;
  @IsString()
  city: string;
  @IsString()
  distinct: string;
  @IsString()
  detailAddress: string;
  @IsString()
  postalCode: string;
  @IsString()
  phone: string;
  @IsString()
  companyPhone: string;
  @IsString()
  homePhone: string;
  @IsString()
  password: string;
  @IsNotEmptyObject()
  permissions: [PermissionGroup];
}
export class LoginUserNewDto {
  @IsString()
  userId: string;
  @IsString()
  username: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
export class UpdateUserNewDto extends PartialType(CreateUserNewDto) {}
export class DeleteUserNewDto extends PartialType(CreateUserNewDto) {}
