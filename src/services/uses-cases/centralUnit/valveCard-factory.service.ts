import { Injectable } from '@nestjs/common';
import { ValveCard } from '../../../core';
import { CreateValveCardDto, UpdateValveCardDto } from '../../../core/dtos';

@Injectable()
export class ValveCardFactoryService {
  createValveCard(createValveCardDto: CreateValveCardDto) {
    const valveCard = new ValveCard();
    valveCard.userId = createValveCardDto.userId;
    valveCard.hubGroupId = createValveCardDto.hubGroupId;
    valveCard.valveWorkTime = createValveCardDto.valveWorkTime;
    valveCard.deviceId = createValveCardDto.deviceId;
    valveCard.deviceLocation = createValveCardDto.deviceLocation;
    valveCard.waterMeter = createValveCardDto.waterMeter;
    valveCard.waterSensor = createValveCardDto.waterSensor;
    valveCard.pressureSensor = createValveCardDto.pressureSensor;
    valveCard.responseRangeNonIrrigation = createValveCardDto.responseRangeNonIrrigation;
    valveCard.responseRangeWhenIrrigation = createValveCardDto.responseRangeWhenIrrigation;
    valveCard.numberOfPulses = createValveCardDto.numberOfPulses;
    valveCard.virtualPump = createValveCardDto.virtualPump;
    valveCard.boxMoistureSensor = createValveCardDto.boxMoistureSensor;
    valveCard.gpsModule = createValveCardDto.gpsModule;
    valveCard.barcodeNo = createValveCardDto.barcodeNo;
    valveCard.isActive = createValveCardDto.isActive;
    return valveCard;
  }

  updateValveCard(updateValveCardDto: UpdateValveCardDto) {
    const valveCard = new ValveCard();
    valveCard.userId = updateValveCardDto.userId;
    valveCard.hubGroupId = updateValveCardDto.hubGroupId;
    valveCard.valveWorkTime = updateValveCardDto.valveWorkTime;
    valveCard.deviceId = updateValveCardDto.deviceId;
    valveCard.deviceLocation = updateValveCardDto.deviceLocation;
    valveCard.waterMeter = updateValveCardDto.waterMeter;
    valveCard.waterSensor = updateValveCardDto.waterSensor;
    valveCard.pressureSensor = updateValveCardDto.pressureSensor;
    valveCard.responseRangeNonIrrigation = updateValveCardDto.responseRangeNonIrrigation;
    valveCard.responseRangeWhenIrrigation = updateValveCardDto.responseRangeWhenIrrigation;
    valveCard.numberOfPulses = updateValveCardDto.numberOfPulses;
    valveCard.virtualPump = updateValveCardDto.virtualPump;
    valveCard.boxMoistureSensor = updateValveCardDto.boxMoistureSensor;
    valveCard.gpsModule = updateValveCardDto.gpsModule;
    valveCard.barcodeNo = updateValveCardDto.barcodeNo;
    valveCard.isActive = updateValveCardDto.isActive;
    return valveCard;
  }
}
