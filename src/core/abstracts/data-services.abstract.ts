import {
  User,
  CallList,
  QrCode,
  Card,
  UserSetting,
  CentralUnit,
  HubGroups,
  Khas,
  PumpKhas,
  ValveCard,
  ContractTypes,
  UserContract,
  DeviceTypes,
  Devices,
  HardWares,
  IrrigationTypes,
  Modem,
  SimCard,
  PermissionGroup,
  Permission,
  Subscription,
  UserNew,
  Logger,
} from '../entities';

import { IGenericRepository } from './generic-repository.abstract';
import { Pumps } from '../entities/pumps/pumps.models';

export abstract class IDataService {
  abstract users: IGenericRepository<User>;
  abstract calls: IGenericRepository<CallList>;
  abstract qrCodes: IGenericRepository<QrCode>;
  abstract cards: IGenericRepository<Card>;
  abstract userSettings: IGenericRepository<UserSetting>;
  abstract centralUnit: IGenericRepository<CentralUnit>;
  abstract hubGroups: IGenericRepository<HubGroups>;
  abstract khas: IGenericRepository<Khas>;
  abstract pumpsKhas: IGenericRepository<PumpKhas>;
  abstract valveCard: IGenericRepository<ValveCard>;
  abstract contractType: IGenericRepository<ContractTypes>;
  abstract userContract: IGenericRepository<UserContract>;
  abstract deviceTypes: IGenericRepository<DeviceTypes>;
  abstract devices: IGenericRepository<Devices>;
  abstract hardwares: IGenericRepository<HardWares>;
  abstract irrigationTypes: IGenericRepository<IrrigationTypes>;
  abstract modem: IGenericRepository<Modem>;
  abstract simCards: IGenericRepository<SimCard>;
  abstract permissionGroups: IGenericRepository<PermissionGroup>;
  abstract permission: IGenericRepository<Permission>;
  abstract pumps: IGenericRepository<Pumps>;
  abstract subscription: IGenericRepository<Subscription>;
  abstract usersNew: IGenericRepository<UserNew>;
  abstract logger: IGenericRepository<Logger>;
}
