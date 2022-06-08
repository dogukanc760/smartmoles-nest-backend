import { Injectable } from '@nestjs/common';
import { IDataService, Modem, UserNew } from '../../../core';
import { ModemFactoryService } from './modem-factory.service';
import { CreateModemDto, UpdateModemDto } from '../../../core/dtos';

@Injectable()
export class ModemService {
  constructor(
    private dataService: IDataService,
    private modemFactoryService: ModemFactoryService,
  ) {}

  async getAllModem(): Promise<Modem[]> {
    return await this.dataService.modem.getAll();
  }

  async getOneModem(id: any): Promise<Modem> {
    return await this.dataService.modem.get(id);
  }

  async getModemByUser(user: [UserNew]): Promise<Modem[]> {
    return (await this.dataService.modem.getAll()).filter((x) => {
      x.user == user;
    });
  }

  async createModem(createModemDto: CreateModemDto): Promise<Modem> {
    const newRecord = this.modemFactoryService.createModem(createModemDto);
    return await this.dataService.modem.create(newRecord);
  }

  async updateModem(id: any, updateCreateDto: UpdateModemDto): Promise<Modem> {
    const updateRecord = this.modemFactoryService.updateModem(updateCreateDto);
    return await this.dataService.modem.update(id, updateRecord);
  }

  async deleteModem(id: any): Promise<Modem> {
    return await this.dataService.modem.delete(id);
  }
}
