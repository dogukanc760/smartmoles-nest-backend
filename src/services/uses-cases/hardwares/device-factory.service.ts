import { Injectable } from '@nestjs/common';
import { CreateDevicesDto, UpdateDevicesDto } from '../../../core/dtos';
import { Devices } from '../../../core';

@Injectable()
export class DeviceFactoryService {
  createDevice(createDeviceDto: CreateDevicesDto) {
    const device = new Devices();
    device.deviceName = createDeviceDto.deviceName;
    device.deviceLocation = createDeviceDto.deviceLocation;
    device.khasResetCount = createDeviceDto.khasResetCount;
    device.sensorRangeLimit = createDeviceDto.sensorRangeLimit;
    device.sensorDigitalLimit = createDeviceDto.sensorDigitalLimit;
    device.isActive = createDeviceDto.isActive;

    return device;
  }

  updateDevice(updateDeviceDto: UpdateDevicesDto) {
    const device = new Devices();
    device.deviceName = updateDeviceDto.deviceName;
    device.deviceLocation = updateDeviceDto.deviceLocation;
    device.khasResetCount = updateDeviceDto.khasResetCount;
    device.sensorRangeLimit = updateDeviceDto.sensorRangeLimit;
    device.sensorDigitalLimit = updateDeviceDto.sensorDigitalLimit;
    device.isActive = updateDeviceDto.isActive;

    return device;
  }
}
