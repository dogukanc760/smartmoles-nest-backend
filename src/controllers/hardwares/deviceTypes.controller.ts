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
import { DeviceTypesService } from '../../services';
import environment from '../../environment/environment';
import {
  CreateDevicesDto,
  CreateDeviceTypesDto,
  UpdateDeviceTypesDto,
} from '../../core/dtos';

@Controller('devices-types')
@ApiTags('Devices Endpoints')
@UseInterceptors(TransformInterceptor)
export class DeviceTypesController {
  constructor(private deviceTypesService: DeviceTypesService) {}

  @Get()
  async getAllDeviceTypes() {
    return await this.deviceTypesService.getAllDeviceTypes();
  }

  @Get(':id')
  async getOneDeviceType(@Param('id') id: any) {
    return await this.deviceTypesService.getOneDeviceTypes(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateDeviceTypesDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createDeviceType(@Body() createDeviceTypesDto: CreateDeviceTypesDto) {
    return await this.deviceTypesService.createDeviceTypes(
      createDeviceTypesDto,
    );
  }

  @Put(':id')
  async updateDeviceTypes(
    @Param('id') id: any,
    @Body() updateDeviceTypesDto: UpdateDeviceTypesDto,
  ) {
    return await this.deviceTypesService.updateDeviceTypes(
      id,
      updateDeviceTypesDto,
    );
  }

  @Delete(':id')
  async deleteDeviceTypes(@Param('id') id: any) {
    return await this.deviceTypesService.deleteDeviceTypes(id);
  }
}
