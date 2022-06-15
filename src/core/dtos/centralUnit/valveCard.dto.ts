import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateValveCardDto {
  @IsString()
  userId: string;
  @IsString()
  hubGroupId: string;
  @IsString()
  deviceId: string;
  @IsString()
  deviceLocation: string;
  @IsString()
  waterMeter: string;
  @IsString()
  waterSensor: string;
  @IsBoolean()
  pressureSensor: boolean;
  @IsString()
  responseRangeWhenIrrigation: string;
  @IsString()
  responseRangeNonIrrigation: string;
  @IsNumber()
  numberOfPulses: number;
  @IsBoolean()
  virtualPump: boolean;
  @IsBoolean()
  boxMoistureSensor: boolean;
  @IsBoolean()
  gpsModule: boolean;
  @IsString()
  barcodeNo: string;
  @IsString()
  valveWorkTime: string;
  @IsBoolean()
  isActive: boolean;
}

export class GetValveCardDto {
  @IsString()
  _id: string;
  @IsString()
  hubGroupId: string;
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
  pressureSensor: boolean;
  @IsString()
  responseRangeWhenIrrigation: string;
  @IsString()
  responseRangeNonIrrigation: string;
  @IsNumber()
  numberOfPulses: number;
  @IsBoolean()
  virtualPump: boolean;
  @IsBoolean()
  boxMoistureSensor: boolean;
  @IsBoolean()
  gpsModule: boolean;
  @IsString()
  barcodeNo: string;
  @IsString()
  valveWorkTime: string;

  @IsBoolean()
  isActive: boolean;
}

export class UpdateValveCardDto extends PartialType(CreateValveCardDto) { }
export class DeleteValveCardDto extends PartialType(CreateValveCardDto) { }
