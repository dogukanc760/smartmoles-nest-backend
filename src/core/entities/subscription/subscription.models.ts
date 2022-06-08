import { HardWares } from '../hardwares/hardwares.models';

export class Subscription {
  userId: string;
  contractId: string;
  country: string;
  city: string;
  distinct: string;
  street: string;
  postalCode: string;
  coordinates: string;
  detailedAddress: string;
  creatorCompany: string;
  creatorCompanyCode: string;
  creatorStaffName: string;
  simCardNo: string;
  simCardIp: string;
  modemImei: string;
  sensorIds: string[];
  softwareVersion: string;
  serverIp: string;
  delivered: [HardWares];

  isActive: boolean;
}
