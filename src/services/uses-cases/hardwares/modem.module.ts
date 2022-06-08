import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { ModemFactoryService } from "./modem-factory.service";
import { ModemService } from "./modem.service";


@Module({
  imports: [DataServicesModule],
  providers: [ModemFactoryService, ModemService],
  exports:  [ModemFactoryService, ModemService],
})
export class ModemServiceModule {}