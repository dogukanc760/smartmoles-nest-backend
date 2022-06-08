import { Injectable } from '@nestjs/common';
import { IDataService, SimCard, UserNew } from '../../../core';
import { SimCardFactoryService } from './simCard-factory.service';
import { CreateSimCardDto, UpdateSimCardDto } from '../../../core/dtos';

@Injectable()
export class SimCardsService {
  constructor(
    private dataService: IDataService,
    private simCardFactoryService: SimCardFactoryService,
  ) {}

  async getAllSimCard(): Promise<SimCard[]> {
    return await this.dataService.simCards.getAll();
  }

  async getOneSimCard(id: any): Promise<SimCard> {
    return await this.dataService.simCards.get(id);
  }

  async getSimCardByUser(user: [UserNew]): Promise<SimCard[]> {
    return (await this.dataService.simCards.getAll()).filter((x) => {
      x.user == user;
    });
  }

  async createSimCard(createSimCardDto: CreateSimCardDto): Promise<SimCard> {
    const newRecord =
      this.simCardFactoryService.createSimCard(createSimCardDto);
    return await this.dataService.simCards.create(newRecord);
  }

  async updateSimCard(
    id: any,
    updateCreateDto: UpdateSimCardDto,
  ): Promise<SimCard> {
    const updateRecord =
      this.simCardFactoryService.updateSimCard(updateCreateDto);
    return await this.dataService.simCards.update(id, updateRecord);
  }

  async deleteSimCard(id: any): Promise<SimCard> {
    return await this.dataService.simCards.delete(id);
  }
}
