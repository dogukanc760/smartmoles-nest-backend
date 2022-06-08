import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { SimCardFactoryService } from './simCard-factory.service';
import { SimCardsService } from './simCards.service';

@Module({
  imports: [DataServicesModule],
  providers: [SimCardFactoryService, SimCardsService],
  exports: [SimCardFactoryService, SimCardsService],
})
export class SimCardsServiceModule {}
