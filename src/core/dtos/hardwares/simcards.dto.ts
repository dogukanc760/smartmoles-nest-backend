import { IsBoolean, IsNotEmptyObject, IsString } from 'class-validator';
import { UserNew } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSimCardDto {
  @IsNotEmptyObject()
  user: [UserNew];
  @IsString()
  gsm: string;
  @IsString()
  serialNum: string;
  @IsString()
  staticIP: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdateSimCardDto extends PartialType(CreateSimCardDto) {}
export class DeleteSimCardDto extends PartialType(CreateSimCardDto) {}
