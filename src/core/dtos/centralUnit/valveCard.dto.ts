import { IsBoolean, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateValveCardDto {
  @IsString()
  userId: string;
  @IsString()
  deviceId: string;
  @IsString()
  deviceLocation: string;
  @IsString()
  waterMeter: string;
  @IsString()
  waterSensor: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdateValveCardDto extends PartialType(CreateValveCardDto) {}
export class DeleteValveCardDto extends PartialType(CreateValveCardDto) {}
