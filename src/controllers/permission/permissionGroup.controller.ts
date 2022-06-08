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
import { PermissionGroupsService } from '../../services';
import {
  CreateCentralUnitDto,
  CreatePermissionGroupDto,
  UpdatePermissionGroupDto,
} from '../../core/dtos';
import environment from '../../environment/environment';

@Controller('central-unit')
@ApiTags('Central Unit Endpoints')
@UseInterceptors(TransformInterceptor)
export class PermissionGroupController {
  constructor(private permissionGroupService: PermissionGroupsService) {}

  @Get()
  async getAllGroup() {
    return await this.permissionGroupService.getAllPermissionGroup();
  }

  @Get(':id')
  async getOneGroup(@Param('id') id: any) {
    return await this.permissionGroupService.getOnePermissionGroup(id);
  }

  @Put(':id')
  async updateGroup(
    @Param('id') id: any,
    @Body() updatePermissionGroupDto: UpdatePermissionGroupDto,
  ) {
    return await this.permissionGroupService.updatePermissionGroup(
      id,
      updatePermissionGroupDto,
    );
  }

  @Delete(':id')
  async deleteGroup(@Param('id') id: any) {
    return await this.permissionGroupService.deletePermissionGroup(id);
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
  async createGroup(
    @Body() createPermissionGroupDto: CreatePermissionGroupDto,
  ) {
    return await this.permissionGroupService.createPermissionGroup(
      createPermissionGroupDto,
    );
  }
}
