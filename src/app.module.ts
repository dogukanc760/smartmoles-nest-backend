import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MongooseModule } from '@nestjs/mongoose';
import environment from './environment/environment';

import { DataServicesModule } from './services/data-services.module';
import { UserServicesModule } from './services/uses-cases/user/user-services.module';
import {
  CallListController,
  CardController,
  CentralUnitController,
  ContractTypeController,
  DevicesController,
  DeviceTypesController,
  HardwaresController,
  HubGroupsController,
  IrrigationTypesController,
  KhasController,
  ModemController,
  PermissionController,
  PermissionGroupController,
  PumpKhasController,
  PumpsController,
  QrCodeController,
  SimCardController,
  SubscriptionController,
  UserContractController,
  UserController,
  UsernewController,
  UserSettingController,
} from './controllers';
import { CallListServicesModule } from './services/uses-cases/callList/callList-services.module';
import { CardServicesModule } from './services/uses-cases/card/card-services.module';
import { QrCodesServicesModule } from './services/uses-cases/qrCode/qrCode-services.module';
import { UserSettingServicesModule } from './services/uses-cases/usersetting/usersetting-services.module';
import { CentralUnitServiceModule } from './services/uses-cases/centralUnit/centralUnit-service.module';
import { ContractTypeServiceModule } from './services/uses-cases/contracts/contractType.module';
import { HubGroupServiceModule } from './services/uses-cases/centralUnit/hubGroup-service.module';
import { KhasServiceModule } from './services/uses-cases/centralUnit/khas-service.module';
import { PumpKhasServiceModule } from './services/uses-cases/centralUnit/pumpKhas-service.module';
import { ValveCardServiceModule } from './services/uses-cases/centralUnit/valveCard-factory.module';
import { UserContractServiceModule } from './services/uses-cases/contracts/userContract-factory.module';
import { DeviceTypesServiceModule } from './services/uses-cases/hardwares/deviceTypes.module';
import { DevicesServiceModule } from './services/uses-cases/hardwares/device.module';
import { HardwaresServiceModule } from './services/uses-cases/hardwares/hardwares.module';
import { IrrigaitonTypesServiceModule } from './services/uses-cases/hardwares/irrigationTypes.module';
import { ModemServiceModule } from './services/uses-cases/hardwares/modem.module';
import { SimCardsServiceModule } from './services/uses-cases/hardwares/simCards.module';
import { PermissionGroupServiceModule } from './services/uses-cases/permissions/permissionGroups.module';
import { PumpsServiceModule } from './services/uses-cases/pumps/pumps.module';
import { PermissionServiceModule } from './services/uses-cases/permissions/permission.module';
import { SubscriptionServiceModule } from './services/uses-cases/subscription/subscription.module';
import { UserNewServiceModule } from './services/uses-cases/userNew/userNew.module';
import { ValveCardController } from './controllers/centralUnit/valveCard.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './operations/cronTest/dynamicCron';
import { LoggerMiddleware } from './libs/middlewares/loggers/logger.middleware';
import { LoggerServiceModule } from './services/uses-cases/logger/logger.module';
import { HubGroupService } from './services';
import { HubControlOperation } from './operations/hubGroups/hubControl';
import { EnvironmentIterator } from './environment/environment-iterator';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';

@Module({
  imports: [
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
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          dirname: path.join(__dirname, './src/libs/debug'), //path to where save loggin result
          filename: 'debug.log', //name of file where will be saved logging result
          level: 'debug',
        }),
      ],
    }),
    /*ClientsModule.register([
      {
        name: 'GREETING_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '188.38.15.71',
          port: 2000,
        },
      },
    ]),*/
    ScheduleModule.forRoot(),
    DataServicesModule,
    UserServicesModule,
    CallListServicesModule,
    CardServicesModule,
    QrCodesServicesModule,
    CentralUnitServiceModule,
    ContractTypeServiceModule,
    HubGroupServiceModule,
    KhasServiceModule,
    PumpKhasServiceModule,
    ValveCardServiceModule,
    UserContractServiceModule,
    DeviceTypesServiceModule,
    DevicesServiceModule,
    HardwaresServiceModule,
    IrrigaitonTypesServiceModule,
    ModemServiceModule,
    SimCardsServiceModule,
    PermissionGroupServiceModule,
    PermissionServiceModule,
    PumpsServiceModule,
    SubscriptionServiceModule,
    UserNewServiceModule,
    LoggerServiceModule,

    //UserSettingServicesModule,
    //MongooseModule.forRoot(environment.mongoUrl),
    CacheModule.register(),
  ],
  controllers: [
    AppController,
    UserController,
    CallListController,
    CardController,
    QrCodeController,
    CentralUnitController,
    HubGroupsController,
    KhasController,
    PumpKhasController,
    ValveCardController,
    ContractTypeController,
    UserContractController,
    DevicesController,
    DeviceTypesController,
    HardwaresController,
    IrrigationTypesController,
    ModemController,
    SimCardController,
    PermissionController,
    PermissionGroupController,
    PumpsController,
    SubscriptionController,
    UsernewController,

    //UserSettingController,
  ],
  providers: [
    AppService,
    CronService,
    HubGroupService,
    HubControlOperation,
    EnvironmentIterator,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
