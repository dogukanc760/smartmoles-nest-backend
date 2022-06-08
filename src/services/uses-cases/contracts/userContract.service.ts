import { Injectable } from '@nestjs/common';
import { IDataService, UserContract } from '../../../core';
import { UserContractFactoryService } from './userContract-factory.service';
import {
  CreateUserContractDto,
  UpdateUserContractDto,
} from '../../../core/dtos';

@Injectable()
export class UserContractService {
  constructor(
    private dataService: IDataService,
    private userContractFactoryService: UserContractFactoryService,
  ) {}
  async getAllUserContract(): Promise<UserContract[]> {
    return await this.dataService.userContract.getAll();
  }

  async getContractByUser(id: any): Promise<UserContract[]> {
    return (await this.dataService.userContract.getAll()).filter(
      (x) => x.userId == id,
    );
  }

  async getContractByContractId(id: any): Promise<UserContract[]> {
    return (await this.dataService.userContract.getAll()).filter(
      (x) => x.contractId == id,
    );
  }

  async getContractOne(id: any): Promise<UserContract> {
    return await this.dataService.userContract.get(id);
  }

  async createContract(createUserContractDto: CreateUserContractDto) {
    const newRecord = this.userContractFactoryService.createUserContract(
      createUserContractDto,
    );
    return await this.dataService.userContract.create(newRecord);
  }

  async updateContract(id: any, updateUserContractDto: UpdateUserContractDto) {
    const updateRecord = this.userContractFactoryService.updateUserContract(
      updateUserContractDto,
    );
    return await this.dataService.userContract.update(id, updateRecord);
  }

  async deleteContract(id: any) {
    return await this.dataService.userContract.delete(id);
  }
}
