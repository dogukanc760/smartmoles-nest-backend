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
import { ValveCardService } from '../../services';
import { CreateValveCardDto, UpdateValveCardDto } from '../../core/dtos';
@Controller('valve-card')
@ApiTags('Valve Card Endpoints')
@UseInterceptors(TransformInterceptor)
export class ValveCardController {
  constructor(private valveCardService: ValveCardService) {}

  @Get()
  async getAllValve() {
    return await this.valveCardService.getAllValveCard();
  }
  @Get(':id')
  async getOneValveCard(@Param('id') id: any) {
    return await this.valveCardService.getOneValveCard(id);
  }

  @Get('/by-user/:id')
  async getValveCardByUser(@Param('id') id: any) {
    return await this.valveCardService.getValveCardByUser(id);
  }

  @Get('/by-device/:id')
  async getByDevice(@Param('id') id: any) {
    return await this.valveCardService.getValveCardByDevice(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateValveCardDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createValveCard(@Body() createValveCardDto: CreateValveCardDto) {
    return await this.valveCardService.createValveCard(createValveCardDto);
  }

  @Put(':id')
  async updateValveCard(
    @Body() updateValveCardDto: UpdateValveCardDto,
    @Param('id') id: any,
  ) {
    return await this.valveCardService.updateValveCard(updateValveCardDto, id);
  }

  @Delete(':id')
  async deleteValveCard(@Param('id') id: any) {
    return await this.valveCardService.deleteValveCard(id);
  }
}
