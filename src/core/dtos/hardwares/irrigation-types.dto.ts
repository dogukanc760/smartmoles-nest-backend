import { IsBoolean, IsNotEmptyObject, IsString } from 'class-validator';
import { DeviceTypes } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateIrrigationTypesDto {
  @IsString()
  name: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsNotEmptyObject()
  devicesType: [DeviceTypes];
  @IsBoolean()
  isActive: boolean;
}

export class UpdateIrrigationTypesDto extends PartialType(
  CreateIrrigationTypesDto,
) {}
export class DeleteIrrigationTypesDto extends PartialType(
  CreateIrrigationTypesDto,
) {}
