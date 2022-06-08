import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiForbiddenResponse,
  ApiBadGatewayResponse,
} from '@nestjs/swagger';
import { TransformInterceptor } from '../../libs/api-results/standart-results';

import environment from '../../environment/environment';
import { ModemService } from '../../services';
import { CreateModemDto, UpdateModemDto } from '../../core/dtos';

@Controller('modem')
@ApiTags('Modem Endpoints')
@UseInterceptors(TransformInterceptor)
export class ModemController {
  constructor(private modemService: ModemService) {}

  @Get()
  async getAllModem() {
    return await this.modemService.getAllModem();
  }

  @Get(':id')
  async getOneModem(@Param('id') id: any) {
    return await this.modemService.getOneModem(id);
  }

  @Get('/by-user/:id')
  async getModemByUser(@Param('id') id: any) {
    return await this.modemService.getModemByUser(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateModemDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createModem(@Body() createModemDto: CreateModemDto) {
    return await this.modemService.createModem(createModemDto);
  }

  @Put(':id')
  async updateModem(
    @Param('id') id: any,
    @Body() updateModemDto: UpdateModemDto,
  ) {
    return await this.modemService.updateModem(id, updateModemDto);
  }

  @Delete(':id')
  async deleteModem(@Param('id') id: any) {
    return await this.modemService.deleteModem(id);
  }
}
