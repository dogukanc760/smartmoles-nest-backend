import { IsBoolean, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePumpsDto {
  @IsString()
  pumpType: string;
  @IsString()
  pumpManagementType: string;
  @IsString()
  valveManagementType: string;
  @IsString()
  deviceId: string;
  @IsString()
  deviceName: string;
  @IsString()
  deviceLocation: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdatePumpsDto extends PartialType(CreatePumpsDto) {}
export class DeletePumpsDto extends PartialType(CreatePumpsDto) {}
