import { IsBoolean, IsNotEmptyObject, IsString } from 'class-validator';
import { DeviceTypes, UserNew } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateModemDto {
  @IsString()
  imeiNum: string;
  @IsNotEmptyObject()
  user: [UserNew];

  @IsBoolean()
  isActive: boolean;
}

export class UpdateModemDto extends PartialType(CreateModemDto) {}
export class DeleteModemDto extends PartialType(CreateModemDto) {}
