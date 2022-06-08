import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IDataService } from '../../../core';
import environment from '../../../environment/environment';
import {
  CallList,
  CallListSchema,
  Card,
  CardSchema,
  QrCode,
  QrCodeSchema,
  User,
  UserSchema,
  UserSetting,
  UserSettingSchema,
  CentralUnit,
  CentralUnitSchema,
  HubGroups,
  HubGroupsSchema,
  Khas,
  KhasSchema,
  Pumps,
  PumpsSchema,
  ValveCard,
  ValveCardSchema,
  ContractTypes,
  ContractTypesSchema,
  UserContract,
  UserContractSchema,
  DeviceTypes,
  DeviceTypesSchema,
  Devices,
  DevicesSchema,
  HardWares,
  HardWaresSchema,
  IrrigationTypes,
  IrrigationTypesSchema,
  Modem,
  ModemSchema,
  SimCard,
  SimCardSchema,
  Permission,
  PermissionSchema,
  PermissionGroup,
  PermissionGroupSchema,
  Subscription,
  SubscriptionSchema,
  UserNew,
  UserNewSchema,
  PumpKhas,
  PumpKhasSchema,
  Logger,
  LoggerSchema,
} from './model';
import { MongoDataServices } from './mongo-data-services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Logger.name, schema: LoggerSchema },
      { name: User.name, schema: UserSchema },
      { name: Card.name, schema: CardSchema },
      { name: CallList.name, schema: CallListSchema },
      { name: QrCode.name, schema: QrCodeSchema },
      { name: UserSetting.name, schema: UserSettingSchema },
      { name: CentralUnit.name, schema: CentralUnitSchema },
      { name: HubGroups.name, schema: HubGroupsSchema },
      { name: Khas.name, schema: KhasSchema },
      { name: PumpKhas.name, schema: PumpKhasSchema },
      { name: ValveCard.name, schema: ValveCardSchema },
      { name: ContractTypes.name, schema: ContractTypesSchema },
      { name: UserContract.name, schema: UserContractSchema },
      { name: DeviceTypes.name, schema: DeviceTypesSchema },
      { name: Devices.name, schema: DevicesSchema },
      { name: HardWares.name, schema: HardWaresSchema },
      { name: IrrigationTypes.name, schema: IrrigationTypesSchema },
      { name: Modem.name, schema: ModemSchema },
      { name: SimCard.name, schema: SimCardSchema },
      { name: Permission.name, schema: PermissionSchema },
      { name: PermissionGroup.name, schema: PermissionGroupSchema },
      { name: Pumps.name, schema: PumpsSchema },
      { name: Subscription.name, schema: SubscriptionSchema },
      { name: UserNew.name, schema: UserNewSchema },
    ]),
    MongooseModule.forRoot(environment.mongoUrl),
  ],
  providers: [
    {
      provide: IDataService,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataService],
})
export class MongoDataServicesModule {}