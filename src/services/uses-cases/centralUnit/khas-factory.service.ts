import { Injectable } from '@nestjs/common';
import { CreateKhasDto, UpdateKhasDto } from '../../../core/dtos';
import { Khas } from '../../../core';

@Injectable()
export class KhasFactoryService {
  createKhas(createKhasDto: CreateKhasDto) {
    const newKhas = new Khas();
    newKhas.centralUnitId = createKhasDto.centralUnitId;
    newKhas.userId = createKhasDto.userId;
    newKhas.valveName = createKhasDto.valveName;
    newKhas.sensorType = createKhasDto.sensorType;
    newKhas.plantsType = createKhasDto.plantsType;
    newKhas.devicePositioning = createKhasDto.devicePositioning;
    newKhas.dripperRange = createKhasDto.dripperRange;
    newKhas.irrigationTypes = createKhasDto.irrigationTypes;
    newKhas.status = createKhasDto.status;
    newKhas.valveChecks = createKhasDto.valveCheck;
    newKhas.responseRangeNonIrrigation =
      createKhasDto.responseRangeNonIrrigation;
    newKhas.responseRangeWhenIrrigation =
      createKhasDto.responseRangeWhenIrrigation;
    newKhas.isActive = createKhasDto.isActive;

    return newKhas;
  }

  updateKhas(updateKhasDto: UpdateKhasDto) {
    const newKhas = new Khas();
    newKhas.centralUnitId = updateKhasDto.centralUnitId;
    newKhas.userId = updateKhasDto.userId;
    newKhas.valveName = updateKhasDto.valveName;
    newKhas.sensorType = updateKhasDto.sensorType;
    newKhas.plantsType = updateKhasDto.plantsType;
    newKhas.devicePositioning = updateKhasDto.devicePositioning;
    newKhas.dripperRange = updateKhasDto.dripperRange;
    newKhas.irrigationTypes = updateKhasDto.irrigationTypes;
    newKhas.status = updateKhasDto.status;
    newKhas.valveChecks = updateKhasDto.valveCheck;
    newKhas.responseRangeNonIrrigation =
      updateKhasDto.responseRangeNonIrrigation;
    newKhas.responseRangeWhenIrrigation =
      updateKhasDto.responseRangeWhenIrrigation;
    newKhas.isActive = updateKhasDto.isActive;

    return newKhas;
  }
}
