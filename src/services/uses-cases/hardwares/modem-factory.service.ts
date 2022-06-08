import { Injectable } from '@nestjs/common';
import { CreateModemDto, UpdateModemDto } from '../../../core/dtos';
import { Modem } from '../../../core';

@Injectable()
export class ModemFactoryService {
  createModem(createModemDto: CreateModemDto) {
    const modem = new Modem();
    modem.imeiNum = createModemDto.imeiNum;
    modem.user = createModemDto.user;
    modem.isActive = createModemDto.isActive;

    return modem;
  }

  updateModem(updateModemDto: UpdateModemDto) {
    const modem = new Modem();
    modem.imeiNum = updateModemDto.imeiNum;
    modem.user = updateModemDto.user;
    modem.isActive = updateModemDto.isActive;
    return modem;
  }
}
