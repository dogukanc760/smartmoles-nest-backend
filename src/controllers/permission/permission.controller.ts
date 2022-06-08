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
import { PermissionService } from '../../services';
import {
  CreateCentralUnitDto,
  CreatePermissionDto,
  UpdatePermissionDto,
} from '../../core/dtos';
import environment from '../../environment/environment';

@Controller('permission')
@ApiTags('Permission Endpoints')
@UseInterceptors(TransformInterceptor)
export class PermissionController {
  constructor(private permissionService: PermissionService) {}

  @Get()
  async getAllPermission() {
    return await this.permissionService.getAllPermissions();
  }

  @Get(':id')
  async getOnePermission(@Param('id') id: any) {
    return await this.permissionService.getOnePermission(id);
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
  async createPermission(@Body() createPermissionDto: CreatePermissionDto) {
    return await this.permissionService.createPermission(createPermissionDto);
  }

  @Put(':id')
  async updatePermission(
    @Param('id') id: any,
    updatePermissionDto: UpdatePermissionDto,
  ) {
    return await this.permissionService.updatePermission(
      updatePermissionDto,
      id,
    );
  }

  @Delete(':id')
  async deletePermission(@Param('id') id: any) {
    return await this.permissionService.deletePermission(id);
  }
}
