import { Injectable } from '@nestjs/common';
import { CreateHubGroupsDto, UpdateHubGroupsDto } from '../../../core/dtos';
import { HubGroups } from '../../../core';

@Injectable()
export class HubGroupFactoryService {
  createHubGroup(createHubGroupDto: CreateHubGroupsDto) {
    const newHubGroup = new HubGroups();
    newHubGroup.centralUnitId = createHubGroupDto.centralUnitId;
    newHubGroup.name = createHubGroupDto.name;
    newHubGroup.deviceType = createHubGroupDto.deviceType;
    newHubGroup.code = createHubGroupDto.code;
    newHubGroup.status = createHubGroupDto.status;
    newHubGroup.valveCheck = createHubGroupDto.valveCheck;
    newHubGroup.isActive = createHubGroupDto.isActive;

    return newHubGroup;
  }

  updateHubGroup(updateHubGroupDto: UpdateHubGroupsDto) {
    const newHubGroup = new HubGroups();
    newHubGroup.centralUnitId = updateHubGroupDto.centralUnitId;
    newHubGroup.name = updateHubGroupDto.name;
    newHubGroup.deviceType = updateHubGroupDto.deviceType;
    newHubGroup.code = updateHubGroupDto.code;
    newHubGroup.status = updateHubGroupDto.status;
    newHubGroup.valveCheck = updateHubGroupDto.valveCheck;
    newHubGroup.isActive = updateHubGroupDto.isActive;

    return newHubGroup;
  }
}
