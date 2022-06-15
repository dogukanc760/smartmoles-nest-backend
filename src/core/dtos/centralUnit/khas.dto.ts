import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
} from 'class-validator';
import { DeviceTypes, IrrigationTypes } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateKhasDto {
  @IsString()
  @IsNotEmpty()
  centralUnitId: string;
  @IsString()
  userId: string;
  @IsString()
  valveName: string;
  @IsNotEmptyObject()
  sensorType: [DeviceTypes];
  @IsString()
  plantsType: string;
  @IsString()
  devicePositioning: string;
  @IsString()
  dripperRange: string;
  @IsNotEmptyObject()
  irrigationTypes: [IrrigationTypes];
  @IsString()
  status: string;
  @IsString()
  valveCheck: string;
  @IsString()
  responseRangeWhenIrrigation: string;
  @IsString()
  responseRangeNonIrrigation: string;
  @IsString()
  // x ten y ye kadar olan değerlik aralığı bir nevi logaritmik limit
  moistureLimitRange: string[];
  @IsBoolean()
  isActive: boolean;
}

export class GetKhasDto {
  _id: string;

  @IsString()
  @IsNotEmpty()
  centralUnitId: string;
  @IsString()
  userId: string;
  @IsString()
  valveName: string;
  @IsNotEmptyObject()
  sensorType: [DeviceTypes];
  @IsString()
  plantsType: string;
  @IsString()
  devicePositioning: string;
  @IsString()
  dripperRange: string;
  @IsNotEmptyObject()
  irrigationTypes: [IrrigationTypes];
  @IsString()
  status: string;
  @IsString()
  valveCheck: string;
  @IsString()
  responseRangeWhenIrrigation: string;
  @IsString()
  responseRangeNonIrrigation: string;
  @IsString()
  // x ten y ye kadar olan değerlik aralığı bir nevi logaritmik limit
  moistureLimitRange: string[];
  @IsBoolean()
  isActive: boolean;
}

export class UpdateKhasDto extends PartialType(CreateKhasDto) { }
export class DeleteKhasDto extends PartialType(CreateKhasDto) { }
