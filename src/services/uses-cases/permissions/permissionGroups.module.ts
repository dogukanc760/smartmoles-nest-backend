import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { PermissionGroupsFactoryService } from './permissionGroups-factory.service';
import { PermissionGroupsService } from './permissionGroups.service';

@Module({
  imports: [DataServicesModule],
  providers: [PermissionGroupsFactoryService, PermissionGroupsService],
  exports: [PermissionGroupsFactoryService, PermissionGroupsService],
})
export class PermissionGroupServiceModule {}
