import { IsBoolean, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDeviceTypesDto {
  @IsString()
  name: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdateDeviceTypesDto extends PartialType(CreateDeviceTypesDto) {}
export class DeleteDeviceTypesDto extends PartialType(CreateDeviceTypesDto) {}
