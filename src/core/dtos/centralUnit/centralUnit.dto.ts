import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCentralUnitDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  projectImg: string;

  @IsString()
  hourType: string;

  @IsString()
  contractSerialNum: string;

  @IsString()
  name: string;

  @IsString()
  serverIP: string;

  @IsString()
  serverPort: string;

  @IsBoolean()
  isActive: boolean;
  @IsBoolean()
  status: boolean;
}

export class GetCentralUnitDto {
  _id: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  projectImg: string;

  @IsString()
  hourType: string;

  @IsString()
  contractSerialNum: string;

  @IsString()
  name: string;

  @IsString()
  serverIP: string;

  @IsString()
  serverPort: string;

  @IsBoolean()
  isActive: boolean;
  @IsBoolean()
  status: boolean;
}

export class UpdateCentralUnit extends PartialType(CreateCentralUnitDto) {}
export class DeleteCentralUnit extends PartialType(CreateCentralUnitDto) {}
