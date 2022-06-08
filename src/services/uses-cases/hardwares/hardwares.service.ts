import { Injectable } from '@nestjs/common';
import { HardWares, IDataService } from '../../../core';
import { HardwaresFactoryService } from './hardwares-factory.service';
import { CreateHardWares, UpdateHardwaresDto } from '../../../core/dtos';

@Injectable()
export class HardwaresService {
  constructor(
    private dataService: IDataService,
    private hardwaresFactoryService: HardwaresFactoryService,
  ) {}

  async getAllHardwares(): Promise<HardWares[]> {
    return await this.dataService.hardwares.getAll();
  }

  async getOneHardwares(id: any): Promise<HardWares> {
    return await this.dataService.hardwares.get(id);
  }

  async createHardwares(createHardWaresDto: CreateHardWares) {
    const newRecord =
      this.hardwaresFactoryService.createHardWares(createHardWaresDto);
    return await this.dataService.hardwares.create(newRecord);
  }

  async updateHardWares(id: any, updateHardwaresDto: UpdateHardwaresDto) {
    const updateRecord =
      this.hardwaresFactoryService.updateHardwares(updateHardwaresDto);
    return await this.dataService.hardwares.update(id, updateRecord);
  }

  async deleteHardwares(id: any) {
    return await this.dataService.hardwares.delete(id);
  }
}
