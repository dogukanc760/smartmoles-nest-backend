import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { ContractTypeFactoryService } from './contractType-factory.service';
import { ContractTypeService } from './contractType.service';

@Module({
  imports: [DataServicesModule],
  providers: [ContractTypeFactoryService, ContractTypeService],
  exports: [ContractTypeFactoryService, ContractTypeService],
})
export class ContractTypeServiceModule {}
