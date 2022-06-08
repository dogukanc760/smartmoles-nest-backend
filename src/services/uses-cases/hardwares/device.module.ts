import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { DeviceFactoryService } from "./device-factory.service";
import { DevicesService } from "./devices.service";

@Module({
  imports: [DataServicesModule],
  providers: [DeviceFactoryService, DevicesService],
  exports: [DeviceFactoryService, DevicesService],
})
export class DevicesServiceModule {}