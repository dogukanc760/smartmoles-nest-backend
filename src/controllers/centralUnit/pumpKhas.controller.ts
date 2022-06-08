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
import { PumpsKhasService } from '../../services';
import { CreatePumpKhasDto, UpdatePumpKhasDto } from '../../core/dtos';

@Controller('pump-khas')
@ApiTags('Pump Khas Endpoints')
@UseInterceptors(TransformInterceptor)
export class PumpKhasController {
  constructor(private pumpKhasService: PumpsKhasService) {}

  @Get()
  async getAllPumpKhas() {
    return await this.pumpKhasService.getAllPumpKhas();
  }

  @Get('/by-user/:id')
  async getPumpKhasByUser(@Param('id') id: any) {
    return await this.pumpKhasService.getPumpKhasByUser(id);
  }

  @Get(':id')
  async getPumpKhasOne(@Param('id') id: any) {
    return await this.pumpKhasService.getOnePumpKhas(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreatePumpKhasDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createPumpKhas(@Body() createPumpKhasDto: CreatePumpKhasDto) {
    return await this.pumpKhasService.createPumpKhas(createPumpKhasDto);
  }

  @Put(':id')
  async updatePumpKhas(
    @Param('id') id: any,
    @Body() updatePumpKhasDto: UpdatePumpKhasDto,
  ) {
    return await this.pumpKhasService.updatePumpKhas(updatePumpKhasDto, id);
  }

  @Delete(':id')
  async deletePumpKhas(@Param('id') id: any) {
    return await this.pumpKhasService.deletePumpKhas(id);
  }
}
