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
import { PermissionGroupsService, PumpsService } from '../../services';
import {
  CreateCentralUnitDto,
  CreatePumpsDto,
  UpdatePumpsDto,
} from '../../core/dtos';
import environment from '../../environment/environment';

@Controller('central-unit')
@ApiTags('Central Unit Endpoints')
@UseInterceptors(TransformInterceptor)
export class PumpsController {
  constructor(private pumpService: PumpsService) {}

  @Get()
  async getAllPumps() {
    return await this.pumpService.getAllPumps();
  }

  @Get(':id')
  async getOnePumps(@Param('id') id: any) {
    return await this.pumpService.getOnePumps(id);
  }

  @Put(':id')
  async updatePumps(
    @Param('id') id: any,
    @Body() updatePumpsDto: UpdatePumpsDto,
  ) {
    return await this.pumpService.updatePumps(id, updatePumpsDto);
  }

  @Delete(':id')
  async deletePumps(@Param('id') id: any) {
    return await this.pumpService.deletePumps(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreatePumpsDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createPumps(@Body() createPumpsDto: CreatePumpsDto) {
    return await this.pumpService.createPumps(createPumpsDto);
  }
}
