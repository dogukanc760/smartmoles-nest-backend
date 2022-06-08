import { Injectable } from '@nestjs/common';
import { IDataService, Logger } from '../../../core';
import { LoggerFactoryService } from './logger-factory.service';
import { CreateLoggerDto } from '../../../core/dtos/logger/logger.dto';

@Injectable()
export class LoggerService {
  constructor(
    private dataService: IDataService,
    private loggerFactoryService: LoggerFactoryService,
  ) {}

  async getAllLog(): Promise<Logger[]> {
    return await this.dataService.logger.getAll();
  }

  async createLog(createLogDto: CreateLoggerDto): Promise<Logger> {
    const logger = this.loggerFactoryService.createLog(createLogDto);
    return await this.dataService.logger.create(logger);
  }
}
