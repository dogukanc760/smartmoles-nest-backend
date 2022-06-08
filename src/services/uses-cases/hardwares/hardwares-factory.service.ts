import { Injectable } from '@nestjs/common';
import { CreateHardWares, UpdateHardwaresDto } from '../../../core/dtos';
import { HardWares } from '../../../core';

@Injectable()
export class HardwaresFactoryService {
  createHardWares(createHardwaresDto: CreateHardWares) {
    const hardwares = new HardWares();
    hardwares.hardwareName = createHardwaresDto.hardwareName;
    hardwares.price = createHardwaresDto.price;
    hardwares.firstCount = createHardwaresDto.firstCount;
    hardwares.lastStockCount = createHardwaresDto.lastStockCount;
    hardwares.deliveryCount = createHardwaresDto.deliveryCount;
    hardwares.isActive = createHardwaresDto.isActive;

    return hardwares;
  }

  updateHardwares(updateHardwaresDto: UpdateHardwaresDto) {
    const hardwares = new HardWares();
    hardwares.hardwareName = updateHardwaresDto.hardwareName;
    hardwares.price = updateHardwaresDto.price;
    hardwares.firstCount = updateHardwaresDto.firstCount;
    hardwares.lastStockCount = updateHardwaresDto.lastStockCount;
    hardwares.deliveryCount = updateHardwaresDto.deliveryCount;
    hardwares.isActive = updateHardwaresDto.isActive;

    return hardwares;
  }
}
