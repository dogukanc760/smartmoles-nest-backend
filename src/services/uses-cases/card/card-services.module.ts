import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services.module';
import { CardFactoryService } from './card-factory.service';
import { CardServices } from './card-services.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DataServicesModule,
    ClientsModule.register([
      {
        name: 'GREETING_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8080,
        },
      },
    ]),
  ],
  providers: [CardFactoryService, CardServices],
  exports: [CardFactoryService, CardServices],
})
export class CardServicesModule {}
