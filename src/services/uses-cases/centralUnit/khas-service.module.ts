import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { KhasFactoryService } from './khas-factory.service';
import { KhasService } from './khas.service';

@Module({
  imports: [DataServicesModule],
  providers: [KhasFactoryService, KhasService],
  exports: [KhasFactoryService, KhasService],
})
export class KhasServiceModule {}
