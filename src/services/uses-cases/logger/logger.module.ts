import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { LoggerFactoryService } from './logger-factory.service';
import { LoggerService } from './logger.service';

@Module({
  imports: [DataServicesModule],
  providers: [LoggerFactoryService, LoggerService],
  exports: [LoggerFactoryService, LoggerService],
})
export class LoggerServiceModule {}
