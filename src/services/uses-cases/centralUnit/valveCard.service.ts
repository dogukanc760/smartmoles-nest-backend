import { Injectable } from '@nestjs/common';
import { IDataService, ValveCard } from '../../../core';
import { ValveCardFactoryService } from './valveCard-factory.service';
import { CreateValveCardDto, UpdateCardDto } from '../../../core/dtos';

@Injectable()
export class ValveCardService {
  constructor(
    private dataService: IDataService,
    private valveCardFactoryService: ValveCardFactoryService,
  ) {}

  async getAllValveCard(): Promise<ValveCard[]> {
    return await this.dataService.valveCard.getAll();
  }

  async getOneValveCard(id: any): Promise<ValveCard> {
    return await this.dataService.valveCard.get(id);
  }

  async getValveCardByUser(id: any): Promise<ValveCard[]> {
    return (await this.dataService.valveCard.getAll()).filter(
      (x) => x.userId == id,
    );
  }

  async getValveCardByDevice(id: any): Promise<ValveCard[]> {
    return (await this.dataService.valveCard.getAll()).filter(
      (x) => x.deviceId == id,
    );
  }

  async createValveCard(createValveCardDto: CreateValveCardDto) {
    const newRecord =
      this.valveCardFactoryService.createValveCard(createValveCardDto);
    return await this.dataService.valveCard.create(newRecord);
  }

  async updateValveCard(updateValveCardDto: UpdateCardDto, id: any) {
    const updateRecord =
      this.valveCardFactoryService.updateValveCard(updateValveCardDto);
    return await this.dataService.valveCard.update(id, updateRecord);
  }

  async deleteValveCard(id: any) {
    return await this.dataService.valveCard.delete(id);
  }
}
