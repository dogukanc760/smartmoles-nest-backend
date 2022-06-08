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
import { ContractTypeService, PumpsKhasService } from '../../services';
import {
  CreateContractTypesDto,
  CreatePumpKhasDto,
  UpdateContractTypesDto,
  UpdatePumpKhasDto,
} from '../../core/dtos';

@Controller('contract-types')
@ApiTags('Contract Types Endpoints')
@UseInterceptors(TransformInterceptor)
export class ContractTypeController {
  constructor(private contractTypeService: ContractTypeService) {}

  @Get()
  async getAllContractTypes() {
    return await this.contractTypeService.getAllContractTypes();
  }

  @Get(':id')
  async getOneContractTypes(@Param('id') id: any) {
    return await this.contractTypeService.getOneContractTypes(id);
  }

  @Put(':id')
  async updateContractTypes(
    @Param('id') id: any,
    @Body() updateContractTypeDto: UpdateContractTypesDto,
  ) {
    return await this.contractTypeService.updateContractTypes(
      id,
      updateContractTypeDto,
    );
  }

  @Delete(':id')
  async deleteContract(@Param('id') id: any) {
    return await this.contractTypeService.deleteContractTypes(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateContractTypesDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createContract(@Body() createContractTypeDto: CreateContractTypesDto) {
    return await this.contractTypeService.createContractTypes(
      createContractTypeDto,
    );
  }
}
