import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { UserContractFactoryService } from './userContract-factory.service';
import { UserContractService } from './userContract.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserContractFactoryService, UserContractService],
  exports: [UserContractFactoryService, UserContractService],
})
export class UserContractServiceModule {}
