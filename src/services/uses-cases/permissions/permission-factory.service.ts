import { Injectable } from '@nestjs/common';
import { Permission } from '../../../core';
import { CreatePermissionDto, UpdatePermissionDto } from '../../../core/dtos';

@Injectable()
export class PermissionFactoryService {
  createPermission(createPermissionDto: CreatePermissionDto) {
    const permission = new Permission();
    permission.groupId = createPermissionDto.groupId;
    permission.permissionName = createPermissionDto.permissionName;
    permission.permissionDescription =
      createPermissionDto.permissionDescription;
    permission.isActive = createPermissionDto.isActive;

    return permission;
  }

  updatePermission(updatePermissionDto: UpdatePermissionDto) {
    const permission = new Permission();
    permission.groupId = updatePermissionDto.groupId;
    permission.permissionName = updatePermissionDto.permissionName;
    permission.permissionDescription =
      updatePermissionDto.permissionDescription;
    permission.isActive = updatePermissionDto.isActive;

    return permission;
  }
}
