import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { SubscriptionFactoryService } from './subscription-factory.service';
import { SubscriptionService } from './subscription.service';

@Module({
  imports: [DataServicesModule],
  providers: [SubscriptionFactoryService, SubscriptionService],
  exports: [SubscriptionFactoryService, SubscriptionService],
})
export class SubscriptionServiceModule {}
