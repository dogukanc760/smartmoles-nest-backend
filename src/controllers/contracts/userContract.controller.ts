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
import { UserContractService } from '../../services';
import {
  CreateContractTypesDto,
  CreateUserContractDto,
  UpdateContractTypesDto,
} from '../../core/dtos';

@Controller('contract-types')
@ApiTags('Contract Types Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserContractController {
  constructor(private userContractService: UserContractService) {}

  @Get()
  async getAllUserContract() {
    return await this.userContractService.getAllUserContract();
  }

  @Get('/by-user/:id')
  async getByUser(@Param('id') id: any) {
    return await this.userContractService.getContractByUser(id);
  }

  @Get('/by-contract/:id')
  async getByContract(@Param('id') id: any) {
    return await this.userContractService.getContractByContractId(id);
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return await this.userContractService.getContractOne(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateUserContractDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createUserContract(@Body() createContractDto: CreateUserContractDto) {
    return await this.userContractService.createContract(createContractDto);
  }

  @Put(':id')
  async updateUserContract(
    @Param('id') id: any,
    @Body() updateUserContractDto: UpdateContractTypesDto,
  ) {
    return await this.userContractService.updateContract(
      id,
      updateUserContractDto,
    );
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: any) {
    return await this.userContractService.deleteContract(id);
  }
}
