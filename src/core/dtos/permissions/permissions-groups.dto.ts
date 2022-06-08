import { IsBoolean, IsNotEmptyObject, IsString } from 'class-validator';
import { Permission } from '../../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePermissionGroupDto {
  @IsString()
  groupName: string;
  @IsString()
  groupTitle: string;
  @IsString()
  groupDescription: string;
  @IsString()
  groupLevel: string;
  @IsNotEmptyObject()
  groupContent: [Permission];
  @IsBoolean()
  isActive: boolean;
}

export class UpdatePermissionGroupDto extends PartialType(
  CreatePermissionGroupDto,
) {}
export class DeletePermissionGroupDto extends PartialType(
  CreatePermissionGroupDto,
) {}
