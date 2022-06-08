import { IsBoolean, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePermissionDto {
  @IsString()
  groupId: string;
  @IsString()
  permissionName: string;
  @IsString()
  permissionDescription: string;
  @IsBoolean()
  isActive: boolean;
}

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
export class DeletePermissionDto extends PartialType(CreatePermissionDto) {}
