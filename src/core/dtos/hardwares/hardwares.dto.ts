import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDevicesDto } from './devices.dto';

export class CreateHardWares {
  @IsString()
  hardwareName: string;
  @IsNumber()
  price: number;
  @IsNumber()
  firstCount: number;
  @IsNumber()
  lastStockCount: number;
  @IsNumber()
  deliveryCount: number;
  @IsBoolean()
  isActive: boolean;
}

export class UpdateHardwaresDto extends PartialType(CreateHardWares) {}
export class DeleteHardwaresDto extends PartialType(CreateHardWares) {}
