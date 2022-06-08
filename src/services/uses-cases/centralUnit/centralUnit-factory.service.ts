import { Injectable } from '@nestjs/common';
import { CreateCentralUnitDto, UpdateCentralUnit } from '../../../core/dtos';
import { CentralUnit } from '../../../core';

@Injectable()
export class CentralUnitFactoryService {
  createNewCentralUnit(createCentralUnitDto: CreateCentralUnitDto) {
    const centralUnit = new CentralUnit();
    centralUnit.contractSerialNum = createCentralUnitDto.contractSerialNum;
    centralUnit.name = createCentralUnitDto.name;
    centralUnit.userId = createCentralUnitDto.userId;
    centralUnit.projectImg = createCentralUnitDto.projectImg;
    centralUnit.hourType = createCentralUnitDto.hourType;
    centralUnit.serverIP = createCentralUnitDto.serverIP;
    centralUnit.serverPort = createCentralUnitDto.serverPort;
    centralUnit.isActive = createCentralUnitDto.isActive;
    centralUnit.status = createCentralUnitDto.status;

    return centralUnit;
  }

  updateCentralUnit(updateCentralUnit: UpdateCentralUnit) {
    const centralUnit = new CentralUnit();
    centralUnit.contractSerialNum = updateCentralUnit.contractSerialNum;
    centralUnit.name = updateCentralUnit.name;
    centralUnit.userId = updateCentralUnit.userId;
    centralUnit.projectImg = updateCentralUnit.projectImg;
    centralUnit.hourType = updateCentralUnit.hourType;
    centralUnit.serverIP = updateCentralUnit.serverIP;
    centralUnit.serverPort = updateCentralUnit.serverPort;
    centralUnit.isActive = updateCentralUnit.isActive;
    centralUnit.status = updateCentralUnit.status;

    return centralUnit;
  }
}
