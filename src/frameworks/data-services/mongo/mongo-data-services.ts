import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataService, IGenericRepository } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  CallList,
  CallListDocument,
  Card,
  CardDocument,
  QrCode,
  QrCodeDocument,
  User,
  UserDocument,
  UserSetting,
  UserSettingDocument,
  CentralUnit,
  CentralUnitDocument,
  HubGroups,
  HubGroupsDocument,
  Khas,
  KhasDocument,
  PumpKhas,
  PumpKhasDocument,
  ValveCard,
  ValveCardDocument,
  ContractTypes,
  ContractTypesDocument,
  UserContract,
  UserContractDocument,
  DeviceTypes,
  DeviceTypesDocument,
  Devices,
  DevicesDocument,
  HardWares,
  HardWaresDocument,
  IrrigationTypes,
  IrrigationTypesDocument,
  Modem,
  ModemDocument,
  SimCard,
  SimCardDocument,
  Permission,
  PermissionDocument,
  PermissionGroup,
  PermissionGroupDocument,
  Pumps,
  PumpsDocument,
  Subscription,
  SubscriptionDocument,
  UserNew,
  UserNewDocument,
  Logger,
  LoggerDocument,
} from './model';

@Injectable()
export class MongoDataServices implements IDataService, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;
  cards: MongoGenericRepository<Card>;
  calls: MongoGenericRepository<CallList>;
  qrCodes: MongoGenericRepository<QrCode>;
  userSettings: MongoGenericRepository<UserSetting>;
  centralUnit: MongoGenericRepository<CentralUnit>;
  hubGroups: MongoGenericRepository<HubGroups>;
  khas: MongoGenericRepository<Khas>;
  pumpKhas: MongoGenericRepository<PumpKhas>;
  valveCard: MongoGenericRepository<ValveCard>;
  contractTypes: MongoGenericRepository<ContractTypes>;
  userContract: MongoGenericRepository<UserContract>;
  devicesTypes: MongoGenericRepository<DeviceTypes>;
  devices: MongoGenericRepository<Devices>;
  hardWares: MongoGenericRepository<HardWares>;
  irrigationTypes: MongoGenericRepository<IrrigationTypes>;
  modem: MongoGenericRepository<Modem>;
  simCard: MongoGenericRepository<SimCard>;
  permission: MongoGenericRepository<Permission>;
  permissionGroup: MongoGenericRepository<PermissionGroup>;
  pumps: MongoGenericRepository<Pumps>;
  subscription: MongoGenericRepository<Subscription>;
  userNew: MongoGenericRepository<UserNew>;
  pumpsKhas: IGenericRepository<PumpKhas>;
  contractType: IGenericRepository<ContractTypes>;
  deviceTypes: IGenericRepository<DeviceTypes>;
  hardwares: IGenericRepository<HardWares>;
  permissionGroups: IGenericRepository<PermissionGroup>;
  simCards: IGenericRepository<SimCard>;
  usersNew: IGenericRepository<UserNew>;
  logger: IGenericRepository<Logger>;

  constructor(
    @InjectModel(Logger.name)
    private LoggerRepository: Model<LoggerDocument>,
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Card.name)
    private CardRepository: Model<CardDocument>,
    @InjectModel(CallList.name)
    private CallListRepository: Model<CallListDocument>,
    @InjectModel(QrCode.name)
    private QrCodeRepository: Model<QrCodeDocument>,
    @InjectModel(UserSetting.name)
    private UserSettingRepository: Model<UserSettingDocument>,
    @InjectModel(CentralUnit.name)
    private CentralUnitRepository: Model<CentralUnitDocument>,
    @InjectModel(HubGroups.name)
    private HubGroupsRepository: Model<HubGroupsDocument>,
    @InjectModel(Khas.name)
    private KhasRepository: Model<KhasDocument>,
    @InjectModel(PumpKhas.name)
    private PumpKhasRepository: Model<PumpKhasDocument>,
    @InjectModel(ValveCard.name)
    private ValveCardRepository: Model<ValveCardDocument>,
    @InjectModel(ContractTypes.name)
    private ContractTypesRepository: Model<ContractTypesDocument>,
    @InjectModel(UserContract.name)
    private UserContractRepository: Model<UserContractDocument>,
    @InjectModel(DeviceTypes.name)
    private DevicesTypesRepository: Model<DeviceTypesDocument>,
    @InjectModel(Devices.name)
    private DevicesRepository: Model<DevicesDocument>,
    @InjectModel(HardWares.name)
    private HardWaresRepository: Model<HardWaresDocument>,
    @InjectModel(IrrigationTypes.name)
    private IrrigationTypesRepository: Model<IrrigationTypesDocument>,
    @InjectModel(Modem.name)
    private ModemRepository: Model<ModemDocument>,
    @InjectModel(SimCard.name)
    private SimCardRepository: Model<SimCardDocument>,
    @InjectModel(Permission.name)
    private PermissionRepository: Model<PermissionDocument>,
    @InjectModel(PermissionGroup.name)
    private PermissionGroupRepository: Model<PermissionGroupDocument>,
    @InjectModel(Pumps.name)
    private PumpsRepository: Model<PumpsDocument>,
    @InjectModel(Subscription.name)
    private SubscriptionRepository: Model<SubscriptionDocument>,
    @InjectModel(UserNew.name)
    private UserNewRepository: Model<UserNewDocument>,
  ) {}

  onApplicationBootstrap() {
    this.logger = new MongoGenericRepository<Logger>(this.LoggerRepository);
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.cards = new MongoGenericRepository<Card>(this.CardRepository);
    this.calls = new MongoGenericRepository<CallList>(this.CallListRepository);
    this.qrCodes = new MongoGenericRepository<QrCode>(this.QrCodeRepository);
    this.userSettings = new MongoGenericRepository<UserSetting>(
      this.UserSettingRepository,
    );
    this.centralUnit = new MongoGenericRepository<CentralUnit>(
      this.CentralUnitRepository,
    );
    this.hubGroups = new MongoGenericRepository<HubGroups>(
      this.HubGroupsRepository,
    );
    this.khas = new MongoGenericRepository<Khas>(this.KhasRepository);
    this.pumpKhas = new MongoGenericRepository<PumpKhas>(
      this.PumpKhasRepository,
    );
    this.valveCard = new MongoGenericRepository<ValveCard>(
      this.ValveCardRepository,
    );
    this.contractTypes = new MongoGenericRepository<ContractTypes>(
      this.ContractTypesRepository,
    );
    this.userContract = new MongoGenericRepository<UserContract>(
      this.UserContractRepository,
    );
    this.devicesTypes = new MongoGenericRepository<DeviceTypes>(
      this.DevicesTypesRepository,
    );
    this.devices = new MongoGenericRepository<Devices>(this.DevicesRepository);
    this.hardWares = new MongoGenericRepository<HardWares>(
      this.HardWaresRepository,
    );
    this.irrigationTypes = new MongoGenericRepository<IrrigationTypes>(
      this.IrrigationTypesRepository,
    );
    this.modem = new MongoGenericRepository<Modem>(this.ModemRepository);
    this.simCard = new MongoGenericRepository<SimCard>(this.SimCardRepository);
    this.permission = new MongoGenericRepository<Permission>(
      this.PermissionRepository,
    );
    this.permissionGroup = new MongoGenericRepository<PermissionGroup>(
      this.PermissionGroupRepository,
    );
    this.pumps = new MongoGenericRepository<Pumps>(this.PumpsRepository);
    this.subscription = new MongoGenericRepository<Subscription>(
      this.SubscriptionRepository,
    );
    this.userNew = new MongoGenericRepository<UserNew>(this.UserNewRepository);
  }
}
