import { Injectable } from '@nestjs/common';
import { CreateLoggerDto } from '../../../core/dtos/logger/logger.dto';
import { Logger } from '../../../core';

@Injectable()
export class LoggerFactoryService {
  createLog(createLogDto: CreateLoggerDto) {
    const logger = new Logger();
    logger.logTitle = createLogDto.logTitle;
    logger.logDescription = createLogDto.logDescription;
    logger.logContent = createLogDto.logContent;
    logger.logLevel = createLogDto.logLevel;
    logger.logUser = createLogDto.logUser;
    logger.isActive = createLogDto.isActive;

    return logger;
  }
}
