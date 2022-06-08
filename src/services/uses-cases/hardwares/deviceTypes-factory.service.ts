import { CreateDeviceTypesDto, UpdateDeviceTypesDto } from '../../../core/dtos';
import { DeviceTypes } from '../../../core';

export class DeviceTypesFactoryService {
  createDeviceTypes(createDeviceTypesDto: CreateDeviceTypesDto) {
    const deviceTypes = new DeviceTypes();
    deviceTypes.name = createDeviceTypesDto.name;
    deviceTypes.title = createDeviceTypesDto.title;
    deviceTypes.description = createDeviceTypesDto.description;
    deviceTypes.isActive = createDeviceTypesDto.isActive;

    return deviceTypes;
  }

  updateDeviceTypes(updateDeviceTypeDto: UpdateDeviceTypesDto) {
    const deviceTypes = new DeviceTypes();
    deviceTypes.name = updateDeviceTypeDto.name;
    deviceTypes.title = updateDeviceTypeDto.title;
    deviceTypes.description = updateDeviceTypeDto.description;
    deviceTypes.isActive = updateDeviceTypeDto.isActive;

    return deviceTypes;
  }
}
