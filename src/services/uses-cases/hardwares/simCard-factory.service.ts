import { Injectable } from '@nestjs/common';
import { CreateSimCardDto, UpdateSimCardDto } from '../../../core/dtos';
import { SimCard } from '../../../core';

@Injectable()
export class SimCardFactoryService {
  createSimCard(createSimCardDto: CreateSimCardDto) {
    const simCard = new SimCard();
    simCard.user = createSimCardDto.user;
    simCard.gsm = createSimCardDto.gsm;
    simCard.serialNum = createSimCardDto.serialNum;
    simCard.staticIP = createSimCardDto.staticIP;
    simCard.isActive = createSimCardDto.isActive;

    return simCard;
  }

  updateSimCard(updateSimCardDto: UpdateSimCardDto) {
    const simCard = new SimCard();
    simCard.user = updateSimCardDto.user;
    simCard.gsm = updateSimCardDto.gsm;
    simCard.serialNum = updateSimCardDto.serialNum;
    simCard.staticIP = updateSimCardDto.staticIP;
    simCard.isActive = updateSimCardDto.isActive;

    return simCard;
  }
}
