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
import { HubGroupService } from '../../services';

import environment from '../../environment/environment';
import { CreateHubGroupsDto, UpdateHubGroupsDto } from '../../core/dtos';

@Controller('hub-group')
@ApiTags('Hub Group Endpoints')
@UseInterceptors(TransformInterceptor)
export class HubGroupsController {
  constructor(private hubGroupsService: HubGroupService) {}

  @Get()
  async getAllHubGroups() {
    return await this.hubGroupsService.getAllHubGroups();
  }
  @Get('/by-central-unit/:id')
  async getByCentralUnit(@Param('id') id: any) {
    return await this.hubGroupsService.getByCentralUnit(id);
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return await this.hubGroupsService.getOneHubGroup(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateHubGroupsDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createHubGroup(@Body() createHubDto: CreateHubGroupsDto) {
    return await this.hubGroupsService.createHubGroup(createHubDto);
  }

  @Put(':id')
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateHubGroupsDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async updateHubGroups(
    @Param('id') id: any,
    @Body() updateHubGroupDto: UpdateHubGroupsDto,
  ) {
    return await this.hubGroupsService.updateHubGroup(id, updateHubGroupDto);
  }

  @Delete(':id')
  async deleteHubGroups(@Param('id') id: any) {
    return await this.hubGroupsService.deleteHubGroup(id);
  }
}
