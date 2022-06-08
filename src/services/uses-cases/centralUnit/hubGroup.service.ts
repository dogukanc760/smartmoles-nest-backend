import { Injectable } from '@nestjs/common';
import { HubGroups, IDataService } from '../../../core';
import { HubGroupFactoryService } from './hubGroup-factory.service';
import { CreateHubGroupsDto, UpdateHubGroupsDto } from '../../../core/dtos';

@Injectable()
export class HubGroupService {
  constructor(
    private dataService: IDataService,
    private hubGroupsFactoryService: HubGroupFactoryService,
  ) {}

  async getAllHubGroups(): Promise<HubGroups[]> {
    return await this.dataService.hubGroups.getAll();
  }

  async getByCentralUnit(id: any): Promise<HubGroups[]> {
    return (await this.dataService.hubGroups.getAll()).filter(
      (x) => x.centralUnitId === id,
    );
  }

  async getOneHubGroup(id: any): Promise<HubGroups> {
    return await this.dataService.hubGroups.get(id);
  }

  async createHubGroup(
    createHubGroupDto: CreateHubGroupsDto,
  ): Promise<HubGroups> {
    const newHub =
      this.hubGroupsFactoryService.createHubGroup(createHubGroupDto);
    return await this.dataService.hubGroups.create(newHub);
  }

  async updateHubGroup(id: any, updateHubGroupDto: UpdateHubGroupsDto) {
    const updateHub =
      this.hubGroupsFactoryService.updateHubGroup(updateHubGroupDto);
    return await this.dataService.hubGroups.update(id, updateHub);
  }

  async deleteHubGroup(id: any) {
    return await this.dataService.hubGroups.delete(id);
  }
}
