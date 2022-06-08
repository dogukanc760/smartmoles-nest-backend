import { IsBoolean, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateContractTypesDto {
  @IsString()
  name: string;
  @IsString()
  title: string;
  @IsString()
  subMainTitle: string;
  @IsString()
  subContTitle: string;
  @IsString()
  description: string;
  @IsString()
  mainDescription: string;
  @IsString()
  content: string;
  @IsString()
  mainContent: string;
  @IsString()
  subContent: string;
  @IsString()
  altText: string;
  @IsString()
  altMainText: string;
  @IsString()
  altContentText: string;
  @IsString()
  contractTime: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdateContractTypesDto extends PartialType(
  CreateContractTypesDto,
) {}
export class DeleteContractTypesDto extends PartialType(
  CreateContractTypesDto,
) {}
