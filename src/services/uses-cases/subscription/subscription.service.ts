import { Injectable } from '@nestjs/common';
import { IDataService } from '../../../core';
import { SubscriptionFactoryService } from './subscription-factory.service';
import { Subscription } from '../../../core/entities/subscription/subscription.models';
import {
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from '../../../core/dtos';

@Injectable()
export class SubscriptionService {
  constructor(
    private dataService: IDataService,
    private subscriptionFactoryService: SubscriptionFactoryService,
  ) {}

  async getAllSubscription(): Promise<Subscription[]> {
    return await this.dataService.subscription.getAll();
  }

  async getSubscriptionByUser(id: any): Promise<Subscription[]> {
    return (await this.dataService.subscription.getAll()).filter(
      (x) => x.userId == id,
    );
  }

  async getSubscriptionByCompany(company: any): Promise<Subscription[]> {
    return (await this.dataService.subscription.getAll()).filter(
      (x) => x.creatorCompany == company,
    );
  }

  async getSubscriptionByCompanyCode(company: any): Promise<Subscription[]> {
    return (await this.dataService.subscription.getAll()).filter(
      (x) => x.creatorCompanyCode == company,
    );
  }

  async getSubscriptionByStaff(staff: any): Promise<Subscription[]> {
    return (await this.dataService.subscription.getAll()).filter(
      (x) => x.creatorStaffName == staff,
    );
  }

  async getSubscriptionByServerIp(serverIP: any): Promise<Subscription[]> {
    return (await this.dataService.subscription.getAll()).filter(
      (x) => x.serverIp == serverIP,
    );
  }

  async getSubscriptionBySoftVer(softVersion: any): Promise<Subscription[]> {
    return (await this.dataService.subscription.getAll()).filter(
      (x) => x.softwareVersion == softVersion,
    );
  }

  async createSubscription(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<Subscription> {
    const newRecord = this.subscriptionFactoryService.createSubcscription(
      createSubscriptionDto,
    );
    return await this.dataService.subscription.create(newRecord);
  }

  async updateSubscription(
    id: any,
    updateSubscriptionDto: UpdateSubscriptionDto,
  ): Promise<Subscription> {
    const updateRecord = this.subscriptionFactoryService.updateSubscription(
      updateSubscriptionDto,
    );
    return await this.dataService.subscription.update(id, updateRecord);
  }

  async deleteSubscription(id: any): Promise<Subscription> {
    return await this.dataService.subscription.delete(id);
  }
}
