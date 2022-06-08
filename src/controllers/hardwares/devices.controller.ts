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
import { CentralUnitService, DevicesService } from '../../services';
import {
  CreateCentralUnitDto,
  CreateDevicesDto,
  UpdateCentralUnit,
  UpdateDevicesDto,
} from '../../core/dtos';
import environment from '../../environment/environment';

@Controller('devices')
@ApiTags('Devices Endpoints')
@UseInterceptors(TransformInterceptor)
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @Get()
  async getAllDevices() {
    return await this.devicesService.getAllDevices();
  }

  @Get(':id')
  async getOneDevice(@Param('id') id: any) {
    return await this.devicesService.getOneDevice(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateDevicesDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createDevices(@Body() createDeviceDto: CreateDevicesDto) {
    return await this.devicesService.createDevice(createDeviceDto);
  }

  @Put(':id')
  async updateDevice(
    @Param('id') id: any,
    @Body() updateDeviceDto: UpdateDevicesDto,
  ) {
    return await this.devicesService.updateDevice(id, updateDeviceDto);
  }

  @Delete(':id')
  async deleteDevice(@Param('id') id: any) {
    return await this.devicesService.deleteDevice(id);
  }
}
