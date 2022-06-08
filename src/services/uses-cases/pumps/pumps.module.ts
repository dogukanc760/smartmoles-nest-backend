import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { PumpsFactoryService } from './pumps-factory.service';
import { PumpsService } from './pumps.service';

@Module({
  imports: [DataServicesModule],
  providers: [PumpsFactoryService, PumpsService],
  exports: [PumpsFactoryService, PumpsService],
})
export class PumpsServiceModule {}
