import { Injectable } from '@nestjs/common';
import { ValveCard } from '../../../core';
import { CreateValveCardDto, UpdateValveCardDto } from '../../../core/dtos';

@Injectable()
export class ValveCardFactoryService {
  createValveCard(createValveCardDto: CreateValveCardDto) {
    const valveCard = new ValveCard();
    valveCard.userId = createValveCardDto.userId;
    valveCard.deviceId = createValveCardDto.deviceId;
    valveCard.deviceLocation = createValveCardDto.deviceLocation;
    valveCard.waterMeter = createValveCardDto.waterMeter;
    valveCard.waterSensor = createValveCardDto.waterSensor;
    valveCard.isActive = createValveCardDto.isActive;
    return valveCard;
  }

  updateValveCard(updateValveCardDto: UpdateValveCardDto) {
    const valveCard = new ValveCard();
    valveCard.userId = updateValveCardDto.userId;
    valveCard.deviceId = updateValveCardDto.deviceId;
    valveCard.deviceLocation = updateValveCardDto.deviceLocation;
    valveCard.waterMeter = updateValveCardDto.waterMeter;
    valveCard.waterSensor = updateValveCardDto.waterSensor;
    valveCard.isActive = updateValveCardDto.isActive;
    return valveCard;
  }
}
