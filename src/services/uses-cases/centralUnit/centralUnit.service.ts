import { Injectable } from '@nestjs/common';
import { CentralUnit, IDataService } from '../../../core';
import { CentralUnitFactoryService } from './centralUnit-factory.service';
import {
  CreateCentralUnitDto,
  DeleteCentralUnit,
  UpdateCentralUnit,
} from '../../../core/dtos';

@Injectable()
export class CentralUnitService {
  constructor(
    private dataServices: IDataService,
    private centralUnitFactoryService: CentralUnitFactoryService,
  ) {}

  async getAllCentralUnits(): Promise<CentralUnit[]> {
    return await this.dataServices.centralUnit.getAll();
  }

  async getCentralUnitsByUser(id: any): Promise<CentralUnit[]> {
    return (await this.dataServices.centralUnit.getAll()).filter(
      (x) => x.userId == id,
    );
  }

  async getCentralUnitById(id: any): Promise<CentralUnit> {
    return await this.dataServices.centralUnit.get(id);
  }

  async createCentralUnit(
    createCentralUnitDto: CreateCentralUnitDto,
  ): Promise<CentralUnit> {
    const centrals =
      this.centralUnitFactoryService.createNewCentralUnit(createCentralUnitDto);
    return await this.dataServices.centralUnit.create(centrals);
  }

  async updateCentralUnit(
    id: string,
    updateCentralUnitDto: UpdateCentralUnit,
  ): Promise<CentralUnit> {
    const centrals =
      this.centralUnitFactoryService.updateCentralUnit(updateCentralUnitDto);
    return await this.dataServices.centralUnit.update(id, centrals);
  }

  async deleteCentralUnit(id: any): Promise<DeleteCentralUnit> {
    return await this.dataServices.centralUnit.delete(id);
  }
}
