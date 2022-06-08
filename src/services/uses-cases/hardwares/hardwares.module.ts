import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { HardwaresFactoryService } from './hardwares-factory.service';
import { HardwaresService } from './hardwares.service';

@Module({
  imports: [DataServicesModule],
  providers: [HardwaresFactoryService, HardwaresService],
  exports: [HardwaresFactoryService, HardwaresService],
})
export class HardwaresServiceModule {}
