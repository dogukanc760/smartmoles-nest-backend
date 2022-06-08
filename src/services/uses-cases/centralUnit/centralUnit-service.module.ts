import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { CentralUnitFactoryService } from './centralUnit-factory.service';
import { CentralUnitService } from './centralUnit.service';

@Module({
  imports: [DataServicesModule],
  providers: [CentralUnitFactoryService, CentralUnitService],
  exports: [CentralUnitFactoryService, CentralUnitService],
})
export class CentralUnitServiceModule {}
