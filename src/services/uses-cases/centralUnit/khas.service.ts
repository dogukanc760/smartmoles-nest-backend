import { Injectable } from '@nestjs/common';
import { IDataService } from '../../../core';
import { KhasFactoryService } from './khas-factory.service';
import { CreateKhasDto, UpdateKhasDto } from '../../../core/dtos';

@Injectable()
export class KhasService {
  constructor(
    private dataService: IDataService,
    private khasFactoryService: KhasFactoryService,
  ) {}

  async getAllKhas() {
    return await this.dataService.khas.getAll();
  }

  async getOneKhas(id: any) {
    return await this.dataService.khas.get(id);
  }

  async getKhasByUser(id: any) {
    return (await this.dataService.khas.getAll()).filter((x) => x.userId == id);
  }

  async getKhasByCentralUnit(id: any) {
    return (await this.dataService.khas.getAll()).filter(
      (x) => x.centralUnitId == id,
    );
  }

  async getKhasByCentralAndUser(userId: any, centralId: any) {
    return (await this.dataService.khas.getAll()).filter(
      (x) => x.centralUnitId == centralId && x.userId == userId,
    );
  }

  async createKhas(createKhasDto: CreateKhasDto) {
    const newKhas = this.khasFactoryService.createKhas(createKhasDto);
    return await this.dataService.khas.create(newKhas);
  }

  async updateKhas(updateKhasDto: UpdateKhasDto, id: any) {
    const updateKhas = this.khasFactoryService.updateKhas(updateKhasDto);
    return await this.dataService.khas.update(id, updateKhas);
  }

  async deleteKhas(id: any) {
    return await this.dataService.hubGroups.delete(id);
  }
}
