import { Injectable } from '@nestjs/common';
import {
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from '../../../core/dtos';
import { Subscription } from '../../../core/entities/subscription/subscription.models';

@Injectable()
export class SubscriptionFactoryService {
  createSubcscription(createSubscriptionDto: CreateSubscriptionDto) {
    const subcscription = new Subscription();
    subcscription.userId = createSubscriptionDto.userId;
    subcscription.contractId = createSubscriptionDto.contractId;
    subcscription.country = createSubscriptionDto.country;
    subcscription.city = createSubscriptionDto.city;
    subcscription.distinct = createSubscriptionDto.distinct;
    subcscription.street = createSubscriptionDto.street;
    subcscription.postalCode = createSubscriptionDto.postalCode;
    subcscription.coordinates = createSubscriptionDto.coordinates;
    subcscription.detailedAddress = createSubscriptionDto.detailedAddress;
    subcscription.creatorCompany = createSubscriptionDto.creatorCompany;
    subcscription.creatorCompanyCode = createSubscriptionDto.creatorCompanyCode;
    subcscription.creatorStaffName = createSubscriptionDto.creatorStaffName;
    subcscription.simCardNo = createSubscriptionDto.simCardNo;
    subcscription.simCardIp = createSubscriptionDto.simCardIP;
    subcscription.modemImei = createSubscriptionDto.modemImei;
    subcscription.sensorIds = createSubscriptionDto.sensorIds;
    subcscription.softwareVersion = createSubscriptionDto.softwareVersion;
    subcscription.serverIp = createSubscriptionDto.serverIp;
    subcscription.delivered = createSubscriptionDto.delivered;

    return subcscription;
  }

  updateSubscription(updateSubscriptionDto: UpdateSubscriptionDto) {
    const subcscription = new Subscription();
    subcscription.userId = updateSubscriptionDto.userId;
    subcscription.contractId = updateSubscriptionDto.contractId;
    subcscription.country = updateSubscriptionDto.country;
    subcscription.city = updateSubscriptionDto.city;
    subcscription.distinct = updateSubscriptionDto.distinct;
    subcscription.street = updateSubscriptionDto.street;
    subcscription.postalCode = updateSubscriptionDto.postalCode;
    subcscription.coordinates = updateSubscriptionDto.coordinates;
    subcscription.detailedAddress = updateSubscriptionDto.detailedAddress;
    subcscription.creatorCompany = updateSubscriptionDto.creatorCompany;
    subcscription.creatorCompanyCode = updateSubscriptionDto.creatorCompanyCode;
    subcscription.creatorStaffName = updateSubscriptionDto.creatorStaffName;
    subcscription.simCardNo = updateSubscriptionDto.simCardNo;
    subcscription.simCardIp = updateSubscriptionDto.simCardIP;
    subcscription.modemImei = updateSubscriptionDto.modemImei;
    subcscription.sensorIds = updateSubscriptionDto.sensorIds;
    subcscription.softwareVersion = updateSubscriptionDto.softwareVersion;
    subcscription.serverIp = updateSubscriptionDto.serverIp;
    subcscription.delivered = updateSubscriptionDto.delivered;

    return subcscription;
  }
}
