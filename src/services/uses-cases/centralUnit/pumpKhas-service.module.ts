import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { PumpKhasFactoryService } from './pumpKhas-factory.service';
import { PumpsKhasService } from './pumpsKhas.service';

@Module({
  imports: [DataServicesModule],
  providers: [PumpKhasFactoryService, PumpsKhasService],
  exports: [PumpKhasFactoryService, PumpsKhasService],
})
export class PumpKhasServiceModule {}
