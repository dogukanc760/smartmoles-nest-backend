import { IsBoolean, IsNotEmptyObject, IsString } from 'class-validator';
import { ContractTypes } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserContractDto {
  @IsString()
  userId: string;
  @IsString()
  contractId: string;
  @IsNotEmptyObject()
  contract: [ContractTypes];
  @IsBoolean()
  isActive: boolean;
}

export class UpdateUserContractDto extends PartialType(CreateUserContractDto) {}
export class DeleteUserContractDto extends PartialType(CreateUserContractDto) {}
