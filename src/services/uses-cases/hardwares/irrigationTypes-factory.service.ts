import { Injectable } from '@nestjs/common';
import {
  CreateIrrigationTypesDto,
  UpdateIrrigationTypesDto,
} from '../../../core/dtos';
import { IrrigationTypes } from '../../../core';

@Injectable()
export class IrrigationTypesFactoryService {
  createIrrigationTypes(createIrrigationTypesDto: CreateIrrigationTypesDto) {
    const irrigationTypes = new IrrigationTypes();
    irrigationTypes.name = createIrrigationTypesDto.name;
    irrigationTypes.title = createIrrigationTypesDto.title;
    irrigationTypes.description = createIrrigationTypesDto.description;
    irrigationTypes.devicesType = createIrrigationTypesDto.devicesType;
    irrigationTypes.isActive = createIrrigationTypesDto.isActive;

    return irrigationTypes;
  }

  updateIrrigationTypes(updateIrrigationTypesDto: UpdateIrrigationTypesDto) {
    const irrigationTypes = new IrrigationTypes();
    irrigationTypes.name = updateIrrigationTypesDto.name;
    irrigationTypes.title = updateIrrigationTypesDto.title;
    irrigationTypes.description = updateIrrigationTypesDto.description;
    irrigationTypes.devicesType = updateIrrigationTypesDto.devicesType;
    irrigationTypes.isActive = updateIrrigationTypesDto.isActive;

    return irrigationTypes;
  }
}
