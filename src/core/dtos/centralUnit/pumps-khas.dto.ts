import { IsBoolean, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePumpKhasDto {
  @IsString()
  userId: string;
  @IsString()
  pumpDetail: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdatePumpKhasDto extends PartialType(CreatePumpKhasDto) {}
export class DeletePumpKhasDto extends PartialType(CreatePumpKhasDto) {}
