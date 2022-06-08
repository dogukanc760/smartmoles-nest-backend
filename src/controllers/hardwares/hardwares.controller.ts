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
import { HardwaresService } from '../../services';
import {
  CreateCentralUnitDto,
  CreateHardWares,
  UpdateHardwaresDto,
} from '../../core/dtos';

@Controller('hardwares')
@ApiTags('Hardwares Endpoints')
@UseInterceptors(TransformInterceptor)
export class HardwaresController {
  constructor(private hardwaresService: HardwaresService) {}

  @Get()
  async getAllHardwares() {
    return await this.hardwaresService.getAllHardwares();
  }

  @Get(':id')
  async getOneHardware(@Param('îd') id: any) {
    return await this.hardwaresService.getOneHardwares(id);
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
  async createHardwares(@Body() createHardwareDto: CreateHardWares) {
    return await this.hardwaresService.createHardwares(createHardwareDto);
  }

  @Put(':id')
  async updateHardware(
    @Param('id') id: any,
    @Body() updateHardwareDto: UpdateHardwaresDto,
  ) {
    return await this.hardwaresService.updateHardWares(id, updateHardwareDto);
  }

  @Delete(':id')
  async deleteHardware(@Param('id') id: any) {
    return await this.hardwaresService.deleteHardwares(id);
  }
}
