import { Injectable } from '@nestjs/common';
import { IDataService, IrrigationTypes } from '../../../core';
import { IrrigationTypesFactoryService } from './irrigationTypes-factory.service';
import {
  CreateIrrigationTypesDto,
  UpdateIrrigationTypesDto,
} from '../../../core/dtos';

@Injectable()
export class IrrigationTypesService {
  constructor(
    private dataService: IDataService,
    private irrigationTypesFactoryService: IrrigationTypesFactoryService,
  ) {}

  async getAllIrrigationTypes(): Promise<IrrigationTypes[]> {
    return await this.dataService.irrigationTypes.getAll();
  }

  async getOneIrrigationType(id: any): Promise<IrrigationTypes> {
    return await this.dataService.irrigationTypes.get(id);
  }

  async createIrrigationType(
    createIrrigationDto: CreateIrrigationTypesDto,
  ): Promise<IrrigationTypes> {
    const newRecord =
      this.irrigationTypesFactoryService.createIrrigationTypes(
        createIrrigationDto,
      );
    return await this.dataService.irrigationTypes.create(newRecord);
  }

  async updateIrrigationTypeUpdate(
    id: any,
    updateIrrigationDto: UpdateIrrigationTypesDto,
  ): Promise<IrrigationTypes> {
    const updateRecord =
      this.irrigationTypesFactoryService.updateIrrigationTypes(
        updateIrrigationDto,
      );
    return await this.dataService.irrigationTypes.update(id, updateRecord);
  }

  async deleteIrrigationType(id: any): Promise<IrrigationTypes> {
    return await this.dataService.irrigationTypes.delete(id);
  }
}
