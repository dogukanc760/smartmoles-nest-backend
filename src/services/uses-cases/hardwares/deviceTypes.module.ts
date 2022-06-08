import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { DeviceTypesFactoryService } from './deviceTypes-factory.service';
import { DeviceTypesService } from './deviceTypes.service';

@Module({
  imports: [DataServicesModule],
  providers: [DeviceTypesFactoryService, DeviceTypesService],
  exports: [DeviceTypesFactoryService, DeviceTypesService],
})
export class DeviceTypesServiceModule {}
