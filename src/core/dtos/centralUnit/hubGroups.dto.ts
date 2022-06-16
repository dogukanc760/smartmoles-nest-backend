import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHubGroupsDto {
  @IsString()
  @IsNotEmpty()
  centralUnitId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  hubHour: string;

  @IsString()
  @IsNotEmpty()
  hubDate: string;

  @IsString()
  @IsNotEmpty()
  deviceType: string;

  serverIP: string;

  serverPort: string;

  @IsString()
  code: string;
  @IsString()
  status: string;
  @IsString()
  valveCheck: string;
  @IsBoolean()
  isActive: boolean;
}

export class GetHubGroupsDto {
  _id: string;

  @IsString()
  @IsNotEmpty()
  centralUnitId: string;

  serverIP: string;

  serverPort: string;

  @IsString()
  @IsNotEmpty()
  hubHour: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  deviceType: string;

  @IsString()
  code: string;
  @IsString()
  status: string;
  @IsString()
  valveCheck: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdateHubGroupsDto extends PartialType(CreateHubGroupsDto) {}
export class DeleteHubGroupsDto extends PartialType(CreateHubGroupsDto) {}
