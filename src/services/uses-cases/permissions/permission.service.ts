import { Injectable } from '@nestjs/common';
import { IDataService, Permission } from '../../../core';
import { PermissionFactoryService } from './permission-factory.service';
import { CreatePermissionDto, UpdatePermissionDto } from '../../../core/dtos';

@Injectable()
export class PermissionService {
  constructor(
    private dataService: IDataService,
    private permissionFactoryService: PermissionFactoryService,
  ) {}

  async getAllPermissions(): Promise<Permission[]> {
    return await this.dataService.permission.getAll();
  }

  async getPermissionsByGroup(id: any): Promise<Permission[]> {
    return (await this.dataService.permission.getAll()).filter(
      (x) => x.groupId == id,
    );
  }

  async getOnePermission(id: any): Promise<Permission> {
    return await this.dataService.permission.get(id);
  }

  async createPermission(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const newRecord =
      this.permissionFactoryService.createPermission(createPermissionDto);
    return await this.dataService.permission.create(createPermissionDto);
  }

  async updatePermission(updatePermissionDto: UpdatePermissionDto, id: any): Promise<Permission> {
    const updateRecord =
      this.permissionFactoryService.updatePermission(updatePermissionDto);
    return await this.dataService.permission.update(id, updateRecord);
  }

  async deletePermission(id: any): Promise<Permission> {
    return await this.dataService.permission.delete(id);
  }
}
