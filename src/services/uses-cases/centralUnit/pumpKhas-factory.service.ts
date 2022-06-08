import { Injectable } from '@nestjs/common';
import {
  CreatePumpKhasDto,
  UpdateKhasDto,
  UpdatePumpKhasDto,
} from '../../../core/dtos';
import { PumpKhas } from '../../../core';

@Injectable()
export class PumpKhasFactoryService {
  createPumpKhas(createPumpKhasDto: CreatePumpKhasDto) {
    const pumpKhas = new PumpKhas();
    pumpKhas.userId = createPumpKhasDto.userId;
    pumpKhas.pumpDetail = createPumpKhasDto.pumpDetail;
    pumpKhas.isActive = createPumpKhasDto.isActive;

    return pumpKhas;
  }

  updatePumpKhas(updatePumpKhasDto: UpdatePumpKhasDto) {
    const pumpKhas = new PumpKhas();
    pumpKhas.userId = updatePumpKhasDto.userId;
    pumpKhas.pumpDetail = updatePumpKhasDto.pumpDetail;
    pumpKhas.isActive = updatePumpKhasDto.isActive;

    return pumpKhas;
  }
}
