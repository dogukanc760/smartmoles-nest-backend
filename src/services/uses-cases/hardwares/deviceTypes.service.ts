import { Injectable } from '@nestjs/common';
import { DeviceTypes, IDataService } from '../../../core';
import { DeviceTypesFactoryService } from './deviceTypes-factory.service';
import { CreateDeviceTypesDto, UpdateDeviceTypesDto } from '../../../core/dtos';

@Injectable()
export class DeviceTypesService {
  constructor(
    private dataService: IDataService,
    private deviceTypeFactoryService: DeviceTypesFactoryService,
  ) {}

  async getAllDeviceTypes(): Promise<DeviceTypes[]> {
    return await this.dataService.deviceTypes.getAll();
  }

  async getOneDeviceTypes(id: any): Promise<DeviceTypes> {
    return await this.dataService.deviceTypes.get(id);
  }

  async createDeviceTypes(createDeviceTypesDto: CreateDeviceTypesDto) {
    const newRecord =
      this.deviceTypeFactoryService.createDeviceTypes(createDeviceTypesDto);
    return await this.dataService.deviceTypes.create(newRecord);
  }

  async updateDeviceTypes(id: any, updateDeviceTypesDto: UpdateDeviceTypesDto) {
    const updateRecord =
      this.deviceTypeFactoryService.updateDeviceTypes(updateDeviceTypesDto);
    return await this.dataService.deviceTypes.update(id, updateRecord);
  }

  async deleteDeviceTypes(id: any) {
    return await this.dataService.deviceTypes.delete(id);
  }
}
