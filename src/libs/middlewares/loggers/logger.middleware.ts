import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CreateLoggerDto } from '../../../core/dtos/logger/logger.dto';
import { LoggerService } from '../../../services/uses-cases/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private loggerService: LoggerService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const createLogDto = new CreateLoggerDto();
    console.log(req.route + 'route');
    console.log(req.body.toString() + 'body');
    console.log(req.ip + 'ip');
    createLogDto.logTitle = req.body.title;
    createLogDto.logDescription = req.body.description;
    createLogDto.logContent = req.body.content;
    createLogDto.logUser = req.body.user;
    createLogDto.logUserId = req.body.userId;
    createLogDto.isActive = true;
    const result = this.loggerService.createLog(createLogDto);
    console.log(createLogDto);
    console.log(result);
    console.log('Request...');
    next();
  }
}
