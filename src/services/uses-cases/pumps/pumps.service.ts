import { Injectable } from '@nestjs/common';
import { IDataService, Pumps } from '../../../core';
import { PumpsFactoryService } from './pumps-factory.service';
import { CreatePumpsDto, UpdatePumpsDto } from '../../../core/dtos';

@Injectable()
export class PumpsService {
  constructor(
    private dataService: IDataService,
    private pumpsFactoryService: PumpsFactoryService,
  ) {}

  async getAllPumps(): Promise<Pumps[]> {
    return await this.dataService.pumps.getAll();
  }

  async getOnePumps(id: any): Promise<Pumps> {
    return await this.dataService.pumps.get(id);
  }

  async updatePumps(id: any, updatePumpsDto: UpdatePumpsDto): Promise<Pumps> {
    const updateRecord = await this.pumpsFactoryService.updatePumps(
      updatePumpsDto,
    );
    return await this.dataService.pumps.update(id, updateRecord);
  }

  async createPumps(createPumpsDto: CreatePumpsDto): Promise<Pumps> {
    const newRecord = await this.pumpsFactoryService.createPumps(
      createPumpsDto,
    );
    return await this.dataService.pumps.create(newRecord);
  }

  async deletePumps(id: any) {
    return await this.dataService.pumps.delete(id);
  }
}
