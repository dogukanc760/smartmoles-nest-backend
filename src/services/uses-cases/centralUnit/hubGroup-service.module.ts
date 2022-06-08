import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { HubGroupFactoryService } from './hubGroup-factory.service';
import { HubGroupService } from './hubGroup.service';

@Module({
  imports: [DataServicesModule],
  providers: [HubGroupFactoryService, HubGroupService],
  exports: [HubGroupFactoryService, HubGroupService],
})
export class HubGroupServiceModule {}
