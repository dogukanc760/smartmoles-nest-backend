import { Injectable } from '@nestjs/common';
import {
  CreatePermissionGroupDto,
  UpdatePermissionGroupDto,
} from '../../../core/dtos';
import { PermissionGroup } from '../../../core';

@Injectable()
export class PermissionGroupsFactoryService {
  createPermissionGroup(createPermissionGroupDto: CreatePermissionGroupDto) {
    const permissionGroup = new PermissionGroup();
    permissionGroup.groupName = createPermissionGroupDto.groupName;
    permissionGroup.groupTitle = createPermissionGroupDto.groupTitle;
    permissionGroup.groupDescription =
      createPermissionGroupDto.groupDescription;
    permissionGroup.groupLevel = createPermissionGroupDto.groupLevel;
    permissionGroup.groupContent = createPermissionGroupDto.groupContent;
    permissionGroup.isActive = createPermissionGroupDto.isActive;

    return permissionGroup;
  }

  updatePermissionGroup(updatePermissionGroupDto: UpdatePermissionGroupDto) {
    const permissionGroup = new PermissionGroup();
    permissionGroup.groupName = updatePermissionGroupDto.groupName;
    permissionGroup.groupTitle = updatePermissionGroupDto.groupTitle;
    permissionGroup.groupDescription =
      updatePermissionGroupDto.groupDescription;
    permissionGroup.groupLevel = updatePermissionGroupDto.groupLevel;
    permissionGroup.groupContent = updatePermissionGroupDto.groupContent;
    permissionGroup.isActive = updatePermissionGroupDto.isActive;

    return permissionGroup;
  }
}
