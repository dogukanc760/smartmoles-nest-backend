import { IsBoolean, IsNotEmptyObject, IsString } from 'class-validator';
import { HardWares } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSubscriptionDto {
  @IsString()
  userId: string;
  @IsString()
  contractId: string;
  @IsString()
  country: string;
  @IsString()
  city: string;
  @IsString()
  distinct: string;
  @IsString()
  street: string;
  @IsString()
  postalCode: string;
  @IsString()
  coordinates: string;
  @IsString()
  detailedAddress: string;
  @IsString()
  creatorCompany: string;
  @IsString()
  creatorCompanyCode: string;
  @IsString()
  creatorStaffName: string;
  @IsString()
  simCardNo: string;
  @IsString()
  simCardIP: string;
  @IsString()
  modemImei: string;
  @IsString()
  sensorIds: string[];
  @IsString()
  softwareVersion: string;
  @IsString()
  serverIp: string;
  @IsNotEmptyObject()
  delivered: [HardWares];
  @IsBoolean()
  isActive: boolean;
}

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {}
export class DeleteSubscriptionDto extends PartialType(CreateSubscriptionDto) {}
