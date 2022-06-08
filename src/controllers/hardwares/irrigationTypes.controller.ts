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
import { IrrigationTypesService } from '../../services';
import {
  CreateCentralUnitDto,
  CreateIrrigationTypesDto,
  UpdateIrrigationTypesDto,
} from '../../core/dtos';

@Controller('irrigation-types')
@ApiTags('Irrigation Types Endpoints')
@UseInterceptors(TransformInterceptor)
export class IrrigationTypesController {
  constructor(private irrigationTypeService: IrrigationTypesService) {}

  @Get()
  async getAllIrrigationTypes() {
    return await this.irrigationTypeService.getAllIrrigationTypes();
  }

  @Get(':id')
  async getOneIrrigationTypes(@Param('id') id: any) {
    return await this.irrigationTypeService.getOneIrrigationType(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateCentralUnitDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createIrrigationTypes(
    @Body() createIrrigationTypesDto: CreateIrrigationTypesDto,
  ) {
    return await this.irrigationTypeService.createIrrigationType(
      createIrrigationTypesDto,
    );
  }

  @Put(':id')
  async updateIrrigationTypes(
    @Param('id') id: any,
    @Body() updateIrrigationTypesDto: UpdateIrrigationTypesDto,
  ) {
    return await this.irrigationTypeService.updateIrrigationTypeUpdate(
      id,
      updateIrrigationTypesDto,
    );
  }

  @Delete(':id')
  async deleteIrrigationTypes(@Param('id') id: any) {
    return await this.irrigationTypeService.deleteIrrigationType(id);
  }
}
