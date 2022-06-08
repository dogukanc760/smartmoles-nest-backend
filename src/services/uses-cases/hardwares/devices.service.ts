import { Injectable } from '@nestjs/common';
import { Devices, IDataService } from '../../../core';
import { DeviceFactoryService } from './device-factory.service';
import { CreateDevicesDto, UpdateDevicesDto } from '../../../core/dtos';

@Injectable()
export class DevicesService {
  constructor(
    private dataService: IDataService,
    private devicesFactoryService: DeviceFactoryService,
  ) {}

  async getAllDevices(): Promise<Devices[]> {
    return await this.dataService.devices.getAll();
  }

  async getOneDevice(id: any): Promise<Devices> {
    return await this.dataService.devices.get(id);
  }

  async createDevice(createDeviceDto: CreateDevicesDto): Promise<Devices> {
    const newRecord = this.devicesFactoryService.createDevice(createDeviceDto);
    return await this.dataService.devices.create(newRecord);
  }

  async updateDevice(
    id: any,
    updateDeviceDto: UpdateDevicesDto,
  ): Promise<Devices> {
    const updateRecord =
      this.devicesFactoryService.updateDevice(updateDeviceDto);
    return await this.dataService.devices.update(id, updateRecord);
  }

  async deleteDevice(id: any): Promise<Devices> {
    return await this.dataService.devices.delete(id);
  }
}
