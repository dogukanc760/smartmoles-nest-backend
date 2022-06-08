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
import { UserNewService } from '../../services';
import environment from '../../environment/environment';
import {
  CreateSubscriptionDto,
  CreateUserNewDto,
  LoginUserNewDto,
  UpdateUserNewDto,
} from '../../core/dtos';

@Controller('user')
@ApiTags('User Endpoints')
@UseInterceptors(TransformInterceptor)
export class UsernewController {
  constructor(private userService: UserNewService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateUserNewDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async register(@Body() createUserDto: CreateUserNewDto) {
    return await this.userService.register(createUserDto);
  }

  @Post('/auth')
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: LoginUserNewDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async auth(@Body() loginUserNewDto: LoginUserNewDto) {
    return await this.userService.auth(loginUserNewDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: any,
    @Body() updateUserDto: UpdateUserNewDto,
  ) {
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param(':id') id: any) {
    return await this.userService.deleteUser(id);
  }

  @Get()
  async getAllUser() {
    return await this.userService.getAllUser();
  }

  @Get(':id')
  async getOneUser(@Param('id') id: any) {
    return await this.userService.getOneUser(id);
  }

  @Get('/by-city/:id')
  async getByCity(@Param('id') id: any) {
    return await this.userService.getOneUser(id);
  }

  @Get('/by-country/:id')
  async getByCountry(@Param('id') id: any) {
    return await this.userService.getUsersByCountry(id);
  }

  @Get('/by-verified/:id')
  async getByVerified(@Param('id') id: any) {
    return await this.userService.getUsersByVerified(id);
  }

  @Get('/by-state/:id')
  async getByState(@Param('id') id: any) {
    return await this.userService.getUsersByState(id);
  }

  @Get('/by-permission/:id')
  async GetByState(@Param('id') id: any) {
    return await this.userService.getUsersByPermission(id);
  }

  @Get('/by-activated/:id')
  async GetByActivated(@Param('id') id: any) {
    return await this.userService.getUsersByActivated(id);
  }
}
