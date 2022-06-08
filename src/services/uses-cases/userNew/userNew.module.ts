import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { UserNewFactoryService } from './userNew-factory.service';
import { UserNewService } from './userNew.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserNewFactoryService, UserNewService],
  exports: [UserNewFactoryService, UserNewService],
})
export class UserNewServiceModule {}
