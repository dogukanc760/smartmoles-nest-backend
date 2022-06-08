import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { ValveCardFactoryService } from './valveCard-factory.service';
import { ValveCardService } from './valveCard.service';

@Module({
  imports: [DataServicesModule],
  providers: [ValveCardFactoryService, ValveCardService],
  exports: [ValveCardFactoryService, ValveCardService],
})
export class ValveCardServiceModule {}
