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
import { SubscriptionService } from '../../services';
import environment from '../../environment/environment';
import {
  CreateCentralUnitDto,
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from '../../core/dtos';

@Controller('subscription')
@ApiTags('Subscription Endpoints')
@UseInterceptors(TransformInterceptor)
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {}

  @Get()
  async getAllSubscription() {
    return await this.subscriptionService.getAllSubscription();
  }

  @Get('/by-user/:id')
  async getSubscriptionByUser(@Param('id') id: any) {
    return await this.subscriptionService.getSubscriptionByUser(id);
  }

  @Get('/by-company/:id')
  async getSubscriptionByCompany(@Param('id') id: any) {
    return await this.subscriptionService.getSubscriptionByCompany(id);
  }

  @Get('/by-company-code/:id')
  async getSubscriptionByCompanyCode(@Param('id') id: any) {
    return await this.subscriptionService.getSubscriptionByCompanyCode(id);
  }

  @Get('/by-staff/:id')
  async getSubscriptionByStaff(@Param('id') id: any) {
    return await this.subscriptionService.getSubscriptionByStaff(id);
  }

  @Get('/by-serverip/:id')
  async getSubscriptionByServerIP(@Param('id') id: any) {
    return await this.subscriptionService.getSubscriptionByServerIp(id);
  }

  @Get('/by-version/:id')
  async getSubscriptionByVersion(@Param('id') id: any) {
    return await this.subscriptionService.getSubscriptionBySoftVer(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: environment.api_results.success_created,
    type: CreateSubscriptionDto,
    isArray: true,
    status: 201,
  })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  async createSubscription(
    @Body() createSubscriptionDto: CreateSubscriptionDto,
  ) {
    return await this.subscriptionService.createSubscription(
      createSubscriptionDto,
    );
  }

  @Put(':id')
  async updateSubscription(
    @Param('id') id: any,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ) {
    return await this.subscriptionService.updateSubscription(
      id,
      updateSubscriptionDto,
    );
  }

  @Delete(':id')
  async deleteSubscription(@Param('id') id: any) {
    return await this.subscriptionService.deleteSubscription(id);
  }
}
