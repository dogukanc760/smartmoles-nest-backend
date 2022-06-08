import { Injectable } from '@nestjs/common';
import { ContractTypes, IDataService } from '../../../core';
import { ContractTypeFactoryService } from './contractType-factory.service';
import {
  CreateContractTypesDto,
  UpdateContractTypesDto,
} from '../../../core/dtos';

@Injectable()
export class ContractTypeService {
  constructor(
    private dataService: IDataService,
    private contractTypeFactoryService: ContractTypeFactoryService,
  ) {}

  async getAllContractTypes(): Promise<ContractTypes[]> {
    return await this.dataService.contractType.getAll();
  }

  async getOneContractTypes(id: any): Promise<ContractTypes> {
    return await this.dataService.contractType.get(id);
  }

  async createContractTypes(
    createContractTypesDto: CreateContractTypesDto,
  ): Promise<ContractTypes> {
    const contracts = this.contractTypeFactoryService.createContractType(
      createContractTypesDto,
    );
    return await this.dataService.contractType.create(contracts);
  }

  async updateContractTypes(
    id: any,
    updateContractTypesDto: UpdateContractTypesDto,
  ): Promise<ContractTypes> {
    const contracts = this.contractTypeFactoryService.updateContractType(
      updateContractTypesDto,
    );
    return await this.dataService.contractType.update(id, contracts);
  }

  async deleteContractTypes(id: any): Promise<ContractTypes> {
    return await this.dataService.contractType.delete(id);
  }
}
