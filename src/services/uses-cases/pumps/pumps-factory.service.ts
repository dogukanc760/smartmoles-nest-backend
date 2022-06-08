import { Injectable } from '@nestjs/common';
import { CreatePumpsDto, UpdatePumpsDto } from '../../../core/dtos';
import { Pumps } from '../../../core/entities/pumps/pumps.models';

@Injectable()
export class PumpsFactoryService {
  createPumps(createPumpsDto: CreatePumpsDto) {
    const pumps = new Pumps();
    pumps.pumpType = createPumpsDto.pumpType;
    pumps.pumpManagementType = createPumpsDto.pumpManagementType;
    pumps.valveManagementType = createPumpsDto.valveManagementType;
    pumps.deviceId = createPumpsDto.deviceId;
    pumps.deviceLocation = createPumpsDto.deviceLocation;
    pumps.deviceName = createPumpsDto.deviceName;

    return pumps;
  }

  updatePumps(updatePumpsDto: UpdatePumpsDto) {
    const pumps = new Pumps();
    pumps.pumpType = updatePumpsDto.pumpType;
    pumps.pumpManagementType = updatePumpsDto.pumpManagementType;
    pumps.valveManagementType = updatePumpsDto.valveManagementType;
    pumps.deviceId = updatePumpsDto.deviceId;
    pumps.deviceLocation = updatePumpsDto.deviceLocation;
    pumps.deviceName = updatePumpsDto.deviceName;

    return pumps;
  }
}
