import { IsBoolean, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDevicesDto {
  @IsString()
  deviceName: string;
  @IsString()
  deviceLocation: string;
  @IsString()
  khasResetCount: string;
  @IsString()
  sensorRangeLimit: string;
  @IsString()
  sensorDigitalLimit: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdateDevicesDto extends PartialType(CreateDevicesDto) {}
export class DeleteDevicesDto extends PartialType(CreateDevicesDto) {}
