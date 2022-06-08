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
import { CentralUnitService } from '../../services';
import { CreateCentralUnitDto, UpdateCentralUnit } from '../../core/dtos';
import environment from '../../environment/environment';

@Controller('central-unit')
@ApiTags('Central Unit Endpoints')
@UseInterceptors(TransformInterceptor)
export class CentralUnitController {
  constructor(private centralUnitService: CentralUnitService) {}

  @Get()
  async getAll() {
    return this.centralUnitService.getAllCentralUnits();
  }

  @Get('/by-user/:id')
  async getByUser(@Param('id') id: any) {
    return await this.centralUnitService.getCentralUnitsByUser(id);
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return await this.centralUnitService.getCentralUnitById(id);
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
  async createCentralUnit(@Body() createCentralUnitDto: CreateCentralUnitDto) {
    return await this.centralUnitService.createCentralUnit(
      createCentralUnitDto,
    );
  }

  @Put(':id')
  async updateCentralUnit(
    @Param('id') id: any,
    @Body() updateCentralUnitDto: UpdateCentralUnit,
  ) {
    return await this.centralUnitService.updateCentralUnit(
      id,
      updateCentralUnitDto,
    );
  }

  @Delete(':id')
  async deleteCentralUnit(@Param('id') id: any) {
    return await this.centralUnitService.deleteCentralUnit(id);
  }
}
