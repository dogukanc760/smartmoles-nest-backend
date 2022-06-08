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
import { KhasService } from '../../services';
import {
  CreateCentralUnitDto,
  CreateKhasDto,
  UpdateKhasDto,
} from '../../core/dtos';

@Controller('khas')
@ApiTags('Khas Endpoints')
@UseInterceptors(TransformInterceptor)
export class KhasController {
  constructor(private khasService: KhasService) {}

  @Get()
  async getAllKhas() {
    return await this.khasService.getAllKhas();
  }

  @Get(':id')
  async getOneKhas(@Param('id') id: any) {
    return await this.khasService.getOneKhas(id);
  }

  @Get('/by-user/:id')
  async getByUser(@Param('id') id: any) {
    return await this.khasService.getKhasByUser(id);
  }

  @Get('/by-central-unit/:id')
  async getByCentralUnit(@Param('id') id: any) {
    return await this.khasService.getKhasByCentralUnit(id);
  }

  @Get('/central-user/:userId/:centralId')
  async getByCentralAndUser(
    @Param('userId') userId: any,
    @Param('centralId') centralId: any,
  ) {
    return await this.khasService.getKhasByCentralAndUser(userId, centralId);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateKhasDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createKhas(@Body() createKhasDto: CreateKhasDto) {
    return await this.khasService.createKhas(createKhasDto);
  }

  @Put(':id')
  async updateKhas(@Param('id') id: any, @Body() updateKhasDto: UpdateKhasDto) {
    return await this.khasService.updateKhas(updateKhasDto, id);
  }

  @Delete(':id')
  async deleteKhas(@Param('id') id: any) {
    return await this.khasService.deleteKhas(id);
  }
}
