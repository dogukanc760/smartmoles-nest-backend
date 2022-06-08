import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';

import { PermissionService } from './permission.service';
import { PermissionFactoryService } from './permission-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [PermissionFactoryService, PermissionService],
  exports: [PermissionFactoryService, PermissionService],
})
export class PermissionServiceModule {}
