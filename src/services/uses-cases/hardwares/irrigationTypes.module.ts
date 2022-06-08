import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { IrrigationTypesFactoryService } from './irrigationTypes-factory.service';
import { IrrigationTypesService } from './irrigationTypes.service';

@Module({
  imports: [DataServicesModule],
  providers: [IrrigationTypesFactoryService, IrrigationTypesService],
  exports: [IrrigationTypesFactoryService, IrrigationTypesService],
})
export class IrrigaitonTypesServiceModule {}
