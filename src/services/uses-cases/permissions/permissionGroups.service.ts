import { Injectable } from '@nestjs/common';
import { IDataService, PermissionGroup } from '../../../core';
import { PermissionGroupsFactoryService } from './permissionGroups-factory.service';
import {
  CreatePermissionGroupDto,
  UpdatePermissionGroupDto,
} from '../../../core/dtos';

@Injectable()
export class PermissionGroupsService {
  constructor(
    private dataService: IDataService,
    private permissionGroupFactoryService: PermissionGroupsFactoryService,
  ) {}

  async getAllPermissionGroup(): Promise<PermissionGroup[]> {
    return await this.dataService.permissionGroups.getAll();
  }

  async getOnePermissionGroup(id: any): Promise<PermissionGroup> {
    return await this.dataService.permissionGroups.get(id);
  }

  async updatePermissionGroup(
    id: any,
    updatePermissionGroupDto: UpdatePermissionGroupDto,
  ): Promise<PermissionGroup> {
    const updateRecord =
      await this.permissionGroupFactoryService.updatePermissionGroup(
        updatePermissionGroupDto,
      );
    return await this.dataService.permissionGroups.update(id, updateRecord);
  }

  async createPermissionGroup(
    createPermissionGroupDto: CreatePermissionGroupDto,
  ): Promise<PermissionGroup> {
    const newRecord =
      await this.permissionGroupFactoryService.createPermissionGroup(
        createPermissionGroupDto,
      );
    return await this.dataService.permissionGroups.create(newRecord);
  }

  async deletePermissionGroup(id: any) {
    return await this.dataService.permissionGroups.delete(id);
  }
}
